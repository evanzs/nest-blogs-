import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TopicoService } from './topico.service';
import { CreateTopicoDto } from './dto/create-topico.dto';
import { UpdateTopicoDto } from './dto/update-topico.dto';
import { Topico } from './entities/topico.entity';

@Controller('api/topico')
export class TopicoController {
  constructor(private readonly topicoService: TopicoService) {}

  @Post()
  async create(@Body() createTopicoDto: CreateTopicoDto): Promise<Topico> {
    return await this.topicoService.create(createTopicoDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return await this.topicoService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.topicoService.findOne(id);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateTopicoDto: UpdateTopicoDto,
  ): Promise<any> {
    return await this.topicoService.update(id, updateTopicoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.topicoService.remove(id);
  }
}
