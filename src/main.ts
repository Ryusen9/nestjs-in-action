import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Global pipes are used to apply validation or transformation logic to all incoming requests in the application. They can be used to validate the data sent by the client before it reaches the route handler, or to transform the data into a desired format. In this example, we are using the ValidationPipe to validate the incoming data against the defined DTO (Data Transfer Object) classes. The whitelist option will remove any properties that are not defined in the DTO, and the forbidNonWhitelisted option will throw an error if any non-whitelisted properties are present in the request body.
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
