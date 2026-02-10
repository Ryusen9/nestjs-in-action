import { pgConfig } from '../../dbConfig';
import { DataSource, DataSourceOptions } from 'typeorm';
import { PropertyFactory } from './property.factory';
import { UserFactory } from './user.factory';
import { PropertyFeatureFactory } from './propertyFeature.factory';
import { MainSeeder } from './main.seeder';
import { runSeeders, SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  ...pgConfig,
  factories: [PropertyFactory, UserFactory, PropertyFeatureFactory],
  seeds: [MainSeeder],
};

const datasource = new DataSource(options);
datasource
  .initialize()
  .then(async () => {
    await datasource.synchronize(true); // this will drop the existing database and create a new one based on the entities defined in the project. Use with caution in production environments.
    await runSeeders(datasource);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
