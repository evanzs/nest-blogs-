import { Module } from '@nestjs/common';
import { RespostaService } from './resposta.service';
import { RespostaController } from './resposta.controller';
import { RespostaRepository } from './resposta.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from '../usuario/usuario.repository';
import { TopicoRepository } from '../topico/topico.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RespostaRepository,UsuarioRepository,TopicoRepository])],
  controllers: [RespostaController],
  providers: [RespostaService]
})
export class RespostaModule {}
