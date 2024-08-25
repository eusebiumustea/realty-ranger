import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PropertyReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  avatar: string;

  @Column()
  description: string;

  @Column()
  totalAgrees: number;

  @Column()
  totalDisagrees: number;
}
