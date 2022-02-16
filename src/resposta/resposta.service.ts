import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TopicoRepository } from '../topico/topico.repository';
import { UsuarioRepository } from '../usuario/usuario.repository';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { UpdateRespostaDto } from './dto/update-resposta.dto';
import { RespostaRepository } from './resposta.repository';

@Injectable()
export class RespostaService {

  constructor(@InjectRepository(RespostaRepository)
    private repository:RespostaRepository,
    @InjectRepository(UsuarioRepository)
    private userRepository:UsuarioRepository,
    @InjectRepository(TopicoRepository)
   private topicoRepository:TopicoRepository ){}

  async create(createRespostaDto: CreateRespostaDto):Promise<any> {

    let entity = await this.repository.create(createRespostaDto)
    
    if(createRespostaDto.id_topico){
      let topico = await this.topicoRepository.findOne(createRespostaDto.id_topico)

    if(topico)
      entity.topico = topico
    }

    if(createRespostaDto.id_usuario){
      let user = await this.userRepository.findOne(createRespostaDto.id_usuario)
      if(user)
        entity.usuario = user
    }

      this.repository.save(entity)

    return entity;
    return 'This action adds a new resposta';
  }

  async findAll():Promise<any> {
    return  await this.userRepository.find(undefined) 
  }

  async findOne(id: string) :Promise<any>{
     return  await this.repository.find({where:{
       topico:{id:id},       
     },
    relations:["topico","usuario"]}) 
  }

  async update(id: string, updateRespostaDto: UpdateRespostaDto):Promise<any> {
    return  await this.repository.update(id,updateRespostaDto) 
  }

  async remove(id: string):Promise<any> {
    return await this.repository.delete(id) 
  }
}
