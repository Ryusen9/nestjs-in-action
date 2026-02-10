import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
// import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [PropertyController],
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
