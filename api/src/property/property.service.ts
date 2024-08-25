import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './property.entity';
@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}
  async create(newProperty: Property) {
    try {
      const property = await this.propertyRepository.save(newProperty);
      return property;
    } catch (error) {
      console.log(error);

      throw new BadRequestException();
    }
  }
  async remove(id: number) {
    try {
      const propertyToRemove = await this.propertyRepository.findOneBy({ id });
      if (!propertyToRemove) {
        throw new NotFoundException('Property with id ' + id + ' not found');
      }
      await this.propertyRepository.remove(propertyToRemove);
    } catch (error) {
      throw new BadRequestException();
    }
  }
  async findAll() {
    try {
      const properties = await this.propertyRepository.find();
      return properties;
    } catch (error) {
      console.log(error);

      throw new BadRequestException();
    }
  }
  async findOne(id: number) {
    try {
      const property = await this.propertyRepository.findOneBy({ id });
      if (property) {
        return property;
      }
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async update(id: number, newProperty: Property) {
    try {
      await this.propertyRepository.update(id, newProperty);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
