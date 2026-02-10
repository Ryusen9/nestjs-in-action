import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
