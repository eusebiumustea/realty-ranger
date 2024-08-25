import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { PropertyService } from './property.service';
import { Property } from './property.entity';

@Controller('/properties')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}
  @Get()
  findAll() {
    return this.propertyService.findAll();
  }
  @Post()
  create(newProperty: Property) {
    return this.propertyService.create(newProperty);
  }
  @Delete(':id')
  delete(id: number) {
    return this.propertyService.remove(id);
  }
  @Get(':id')
  findById(id: number) {
    return this.propertyService.findOne(id);
  }
  @Put(':id')
  update(id: number, propertyChanges: Property) {
    return this.propertyService.update(id, propertyChanges);
  }
}
