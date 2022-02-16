import { Test, TestingModule } from '@nestjs/testing';
import { TopicoController } from './topico.controller';
import { TopicoService } from './topico.service';

describe('TopicoController', () => {
  let controller: TopicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopicoController],
      providers: [TopicoService],
    }).compile();

    controller = module.get<TopicoController>(TopicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
