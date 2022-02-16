import EntidadeBase from '../../app.entidade-base.entity';
import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
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

  @OneToOne(() => Topico)
  @JoinColumn()
  topico: Topico;
}
