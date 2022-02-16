import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCategoriaService } from './sub-categoria.service';
import { CreateSubCategoriaDto } from './dto/create-sub-categoria.dto';
import { UpdateSubCategoriaDto } from './dto/update-sub-categoria.dto';

@Controller('api/sub-categoria')
export class SubCategoriaController {
  constructor(private readonly subCategoriaService: SubCategoriaService) {}

  @Post()
  create(@Body() createSubCategoriaDto: CreateSubCategoriaDto) {
    return this.subCategoriaService.create(createSubCategoriaDto);
  }

  @Get()
  findAll() {
    return this.subCategoriaService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.subCategoriaService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateSubCategoriaDto: UpdateSubCategoriaDto) {
    return this.subCategoriaService.update(id, updateSubCategoriaDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.subCategoriaService.remove(id);
  }
}
