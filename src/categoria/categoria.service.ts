import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioRepository } from '../usuario/usuario.repository';
import { CategoriaRepository } from './categoria.repository';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(CategoriaRepository)
    private repository: CategoriaRepository,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<any> {
    return await this.repository.create(createCategoriaDto);
  }

  async findAll(): Promise<any> {
    return await this.repository.find(undefined);
  }

  async findOne(id: string): Promise<any> {
    return await this.repository.findOne(id);
  }

  async update(
    id: string,
    updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<any> {
    return await this.repository.update(id, updateCategoriaDto);
  }

  async remove(id: string): Promise<any> {
    return await this.repository.delete(id);
  }
}
