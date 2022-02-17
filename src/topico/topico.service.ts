import { Injectable } from '@nestjs/common';
import { CreateTopicoDto } from './dto/create-topico.dto';
import { UpdateTopicoDto } from './dto/update-topico.dto';

import { TopicoRepository } from './topico.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { UsuarioRepository } from '../usuario/usuario.repository';

@Injectable()
export class TopicoService {
  constructor(
    @InjectRepository(TopicoRepository)
    private repository: TopicoRepository,
    @InjectRepository(UsuarioRepository)
    private usuarioRepository: UsuarioRepository,
  ) {}

  async create(createTopicoDto: CreateTopicoDto): Promise<any> {
    const created = await this.repository.create(createTopicoDto);
    if (createTopicoDto?.id_usuario) {
      const user = await await this.usuarioRepository.findOne(
        createTopicoDto?.id_usuario,
      );
      if (user) created.usuario = user;
    }

    if (createTopicoDto?.id_pai) {
      const topic = await this.repository.findOne(createTopicoDto.id_pai);
      if (topic) created.subTopico.push(topic);
    }

    await this.repository.save(created);
    return created;
  }

  async findAll(): Promise<any[]> {
    const teste = await this.repository.find(undefined);

    return teste;
  }

  async findTopico(id: string): Promise<any> {
    const topico = await this.repository.find({
      where: { topicoId: id },
    });
    return topico;
  }

  async findUsuario(id: string): Promise<any> {
    const entity = await this.repository.find({
      where: {
        usuarioId: id,
      },
    });

    return entity;
  }

  async findOne(id: string): Promise<any> {
    const topico = await this.repository.findOne(id);
    return topico;
  }
  async update(id: string, updateTopicoDto: UpdateTopicoDto): Promise<any> {
    return await this.repository.update(id, updateTopicoDto);
  }

  async remove(id: string): Promise<boolean> {
    await this.repository.delete(id);
    return true;
  }
}
