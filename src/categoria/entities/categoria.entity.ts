import EntidadeBase from '../../app.entidade-base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { SubCategoria } from '../../sub-categoria/entities/sub-categoria.entity';
@Entity('categoria')
export class Categoria extends EntidadeBase {
  @Column()
  nome: string;
  
  @OneToMany(() => SubCategoria, subCategoria => subCategoria.categoria)
  subcategoria: SubCategoria[];
}
