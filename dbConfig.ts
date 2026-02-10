import { Property } from 'src/entities/property.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  url: 'postgresql://neondb_owner:npg_W34fEynicHxa@ep-bold-river-aidgzkia-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  port: 5432,
  entities: [Property],
  synchronize: true, // in production it should be false, because it will drop the database and create a new one every time the application is restarted, but in development it can be true to automatically create the database and tables based on the entities defined in the application
};
