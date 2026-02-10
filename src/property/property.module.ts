import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
// import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [PropertyController],
  providers: [PropertyService],
  // we can use global pipes to apply validation to all routes in the module, as example:
  // providers: [
  //   {
  //     provide: APP_PIPE,
  //     useValue: new ValidationPipe({
  //       whitelist: true,
  //       forbidNonWhitelisted: true,
  //       transform: true,
  //       transformOptions  : {
  //         enableImplicitConversion: true,
  //       }
  //     }),
  //   },
  // ],
})
export class PropertyModule {}
