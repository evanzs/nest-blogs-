import { Module } from '@nestjs/common';
import { TopicoService } from './topico.service';
import { TopicoController } from './topico.controller';
import { TopicoRepository } from './topico.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from '../usuario/usuario.repository';
@Module({
  imports: [TypeOrmModule.forFeature([TopicoRepository, UsuarioRepository])],
  controllers: [TopicoController],
  providers: [TopicoService],
})
export class TopicoModule {}
