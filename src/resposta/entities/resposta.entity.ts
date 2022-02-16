import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import EntidadeBase from '../../app.entidade-base.entity';
import { Topico } from '../../topico/entities/topico.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('respostas')
export class Resposta extends EntidadeBase {

  @Column()
  texto: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;

  @OneToOne(() => Topico)
  @JoinColumn()
  topico: Topico;
}
