import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgentProfile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  description: string;

  @Column()
  contact: string;
}
