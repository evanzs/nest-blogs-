import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRepository } from './categoria.repository';
import { SubCategoriaRepository } from '../sub-categoria/sub-categoria.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoriaRepository, SubCategoriaRepository]),
  ],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
