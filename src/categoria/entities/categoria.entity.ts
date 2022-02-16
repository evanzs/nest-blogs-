import EntidadeBase from '../../app.entidade-base.entity';
import { Column, Entity } from 'typeorm';
@Entity('categoria')
export class Categoria extends EntidadeBase {
  @Column()
  nome: string;
}
