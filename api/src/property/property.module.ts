import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property.entity';
import {
  AgentProfile,
  PropertyEssentials,
  PropertyFeature,
  PropertyReview,
} from './entities';
@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports: [
    TypeOrmModule.forFeature([
      Property,
      AgentProfile,
      PropertyEssentials,
      PropertyFeature,
      PropertyReview,
    ]),
  ],
})
export class PropertyModule {}
