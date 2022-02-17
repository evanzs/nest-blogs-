import EntidadeBase from '../../app.entidade-base.entity';
import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('topico')
export class Topico extends EntidadeBase {
  @Column()
  texto: string;

  @Column()
  nome: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;

  @OneToMany(() => Topico, (topico) => topico.subTopico)
  subTopico: Topico[];
}
