import { Repository, EntityRepository } from 'typeorm';
import { Topico } from './entities/topico.entity';

@EntityRepository(Topico)
export class TopicoRepository extends Repository<Topico> {}
