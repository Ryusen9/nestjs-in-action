import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async findOne(id: number) {
    return await this.propertyRepo.findOne({ where: { id } });
  }
  async findAll() {}
  async create(dto: CreatePropertyDto) {
    return await this.propertyRepo.save(dto);
  }
  async update() {}
  async delete() {}
}
