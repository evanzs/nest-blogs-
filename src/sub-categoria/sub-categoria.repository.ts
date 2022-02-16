
import { Repository, EntityRepository } from 'typeorm';
import { SubCategoria } from './entities/sub-categoria.entity';

@EntityRepository(SubCategoria)
export class SubCategoriaRepository extends Repository<SubCategoria> {}
