import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property';
import { Property } from './property/property.entity';
import {
  AgentProfile,
  PropertyEssentials,
  PropertyFeature,
  PropertyReview,
} from './property/entities';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5400,
      username: 'postgres',
      password: '12345678',
      database: 'realtyranger',
      synchronize: true,
      entities: [
        Property,
        AgentProfile,
        PropertyEssentials,
        PropertyFeature,
        PropertyReview,
      ], // Ensure all entities are listed here
    }),
    PropertyModule,
  ],
})
export class AppModule {}
