import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PropertyFeature } from './propertyFeature.entity';
import { User } from './user.entity';
import { PropertyType } from './propertyType.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn() // now this becomes the primary key and has auto increment method
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ default: 0 })
  price: number;

  @ManyToOne(() => User, (user) => user.properties)
  @JoinColumn({ name: 'ownerId' }) // this will create a foreign key in the property table that references the user table
  user: User;

  @OneToOne(
    () => PropertyFeature,
    (propertyFeature) => propertyFeature.property,
    { cascade: true }, // this will automatically save the propertyFeature when we save the property
  )
  propertyFeatures: PropertyFeature;

  @ManyToMany(() => User, (user) => user.likedProperties)
  @JoinTable({ name: 'user_liked_properties' }) // this will create a join table that references both the property and user tables
  likedBy: User[];

  @ManyToOne(() => PropertyType)
  type: PropertyType;
}
