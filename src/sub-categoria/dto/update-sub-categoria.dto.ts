import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategoriaDto } from './create-sub-categoria.dto';

export class UpdateSubCategoriaDto extends PartialType(CreateSubCategoriaDto) {}
