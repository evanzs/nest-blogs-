import { Module } from '@nestjs/common';
import { SubCategoriaService } from './sub-categoria.service';
import { SubCategoriaController } from './sub-categoria.controller';
import { SubCategoriaRepository } from './sub-categoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRepository } from '../categoria/categoria.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubCategoriaRepository, CategoriaRepository]),
  ],
  controllers: [SubCategoriaController],
  providers: [SubCategoriaService],
})
export class SubCategoriaModule {}
