import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
import * as path from 'path';
export default (): PostgresConnectionOptions => ({
  type: 'postgres',
  url: process.env.DB_URL ?? process.env.DATABASE_URL ?? process.env.url,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
  //   entities: [Property], or
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'], // this will automatically load all entities from the entities folder
  logging: true,
  synchronize: true, // in production it should be false, because it will drop the database and create a new one every time the application is restarted, but in development it can be true to automatically create the database and tables based on the entities defined in the application
});
