import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SubCategoriaModule } from './sub-categoria/sub-categoria.module';
import { TopicoModule } from './topico/topico.module';
import { RespostaModule } from './resposta/resposta.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsuarioModule,
    CategoriaModule,
    SubCategoriaModule,
    TopicoModule,
    RespostaModule,
    TypeOrmModule.forRoot({
      host: 'posgres.cnoh2qavdv8g.us-east-2.rds.amazonaws.com',
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      autoLoadEntities: true,
      synchronize: true,
      database: 'postgres',
    }),
  ],
})
export class AppModule {}
