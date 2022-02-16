import EntidadeBase from '../../app.entidade-base.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { PrimaryColumn, Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('sub_categoria')
export class SubCategoria extends EntidadeBase {
  @PrimaryColumn()
  id_pai: string;

  @Column()
  nome: string;

  @OneToOne(() => Categoria)
  @JoinColumn()
  categoria: Categoria;
}
