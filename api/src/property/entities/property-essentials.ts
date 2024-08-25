import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PropertyEssentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bathrooms: number;

  @Column()
  sqmeter: number;

  @Column()
  bedrooms: number;
}
