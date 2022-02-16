import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

class EntidadeBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  criado: Date;

  @CreateDateColumn()
  alterado: Date;
}
export default EntidadeBase;
