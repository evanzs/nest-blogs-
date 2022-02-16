import EntidadeBase from '../../app.entidade-base.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { PrimaryColumn, Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity('sub_categoria')
export class SubCategoria extends EntidadeBase {

  @Column()
  nome: string;

  @ManyToOne(() => SubCategoria, subCategoria => subCategoria.categoria)
  categoria: SubCategoria;
}
