import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  bedrooms: number;
  @Column()
  bathrooms: number;
  @Column()
  parkingSpots: number;
  @Column()
  area: number;
  @Column()
  hasSwimmingPool: boolean;
  @Column()
  hasGardenYard: boolean;
  @Column()
  hasBalcony: boolean;

  @OneToOne(() => Property, (property) => property.propertyFeatures)
  @JoinColumn() // this will create a foreign key in the propertyFeature table that references the property table
  property: Property;
}
