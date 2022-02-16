import { Module } from '@nestjs/common';
import { SubCategoriaService } from './sub-categoria.service';
import { SubCategoriaController } from './sub-categoria.controller';

@Module({
  controllers: [SubCategoriaController],
  providers: [SubCategoriaService]
})
export class SubCategoriaModule {}
