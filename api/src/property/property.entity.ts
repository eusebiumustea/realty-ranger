import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyReview } from './entities/property-review';
import { PropertyEssentials } from './entities/property-essentials';
import { PropertyFeature } from './entities/property-feature';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  propertyType: string;

  @Column()
  dealType: string;

  @Column()
  reviewScore: number;

  @Column('simple-array')
  images: string[];

  @Column()
  location: string;

  @Column()
  address: string;

  @Column({ default: true })
  active: boolean;
}
