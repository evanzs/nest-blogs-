import { Test, TestingModule } from '@nestjs/testing';
import { TopicoService } from './topico.service';

describe('TopicoService', () => {
  let service: TopicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopicoService],
    }).compile();

    service = module.get<TopicoService>(TopicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
