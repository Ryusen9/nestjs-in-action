import { IsInt, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(2, 10, {message: 'Name must be between 2 and 10 characters'})
  name: string;
  @IsString()
  description: string;
  @IsInt()
  price: number;
}
