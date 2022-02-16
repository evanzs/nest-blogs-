import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

import { UsuarioRepository } from './usuario.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioRepository)
    private repository: UsuarioRepository,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto): Promise<any> {
    const user = await this.repository.create(createUsuarioDto);
    await this.repository.save(user);
    return user;
  }

  async findAll(): Promise<any[]> {
    return await this.repository.find(undefined);
  }

  async findOne(id: string): Promise<Usuario> {
    return await this.repository.findOne(id);
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.repository.update(id, updateUsuarioDto);
  }

  async remove(id: string): Promise<boolean> {
    await this.repository.delete(id);
    return true;
  }
}
