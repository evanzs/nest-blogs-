import EntidadeBase from '../../app.entidade-base.entity';
import { Entity, Column } from 'typeorm';
@Entity('usuario')
export class Usuario extends EntidadeBase {
  @Column()
  nome: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  tipo: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  materia: string;

  @Column()
  curso: string;

  @Column()
  instituicao: string;

  @Column()
  imagem: string;

  @Column()
  senha: string;
}
