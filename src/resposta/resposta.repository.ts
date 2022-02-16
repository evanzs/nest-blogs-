
import { Repository, EntityRepository } from 'typeorm';

import { Resposta } from './entities/resposta.entity';

@EntityRepository(Resposta)
export class RespostaRepository extends Repository<Resposta> {}
