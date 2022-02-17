import EntidadeBase from '../../app.entidade-base.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity('sub_categoria')
export class SubCategoria extends EntidadeBase {
  @Column()
  nome: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.subCategoria)
  categoria: Categoria;
}
