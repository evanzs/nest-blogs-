import { Injectable } from '@nestjs/common';
import { CreateSubCategoriaDto } from './dto/create-sub-categoria.dto';
import { UpdateSubCategoriaDto } from './dto/update-sub-categoria.dto';
import { SubCategoriaRepository } from './sub-categoria.repository';
import {InjectRepository} from '@nestjs/typeorm'
import { CategoriaRepository } from '../categoria/categoria.repository';
@Injectable()
export class SubCategoriaService {

  constructor(@InjectRepository(SubCategoriaRepository)
  private repository:SubCategoriaRepository,
  @InjectRepository(CategoriaRepository)
  private categoriaRepository:CategoriaRepository){}



  async create(createSubCategoriaDto: CreateSubCategoriaDto):Promise<any> {
    let entity = await this.repository.create(createSubCategoriaDto)
    
    if(createSubCategoriaDto.id_pai){
      let pai = await this.categoriaRepository.findOne(createSubCategoriaDto.id_pai)
      if(pai)
        entity.categoria = pai
    }
      this.repository.save(entity)

    return entity;
  }

  async findAll() :Promise<any>{
    return await this.repository.find(undefined)
  }

   async findOne(id: string):Promise<any> {
    return await this.repository.findOne(id)   

  }

  async update(id: string, updateSubCategoriaDto: UpdateSubCategoriaDto):Promise<any> {
    
    return  await this.repository.update(id,updateSubCategoriaDto)
  }

  async remove(id: string) :Promise<any> {
    return  await this.repository.delete(id)
  }
}
