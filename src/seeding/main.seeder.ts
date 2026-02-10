import { PropertyType } from '../entities/propertyType.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../entities/user.entity';
import { Property } from '../entities/property.entity';
import { faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // Seed property types first as they are required for properties to be seeded correctly with their respective types.
    const typeRepo = dataSource.getRepository(PropertyType);
    console.log('seeding property types.....');
    const propertyTypes = await typeRepo.save([
      { value: 'Apartment' },
      { value: 'House' },
      { value: 'Villa' },
    ]);

    const userFactory = factoryManager.get(User);
    console.log('seeding users.....');
    const users = await userFactory.saveMany(10);

    const propertyFactory = factoryManager.get(Property);
    console.log('seeding properties......');
    const propertyFeatureFactory = factoryManager.get(PropertyFeature);
    console.log('seeding properties.....');
    const properties = await Promise.all(
      Array(50)
        .fill('')
        .map(async () => {
          const property = await propertyFactory.make({
            user: faker.helpers.arrayElement(users),
            type: faker.helpers.arrayElement(propertyTypes),
            propertyFeatures: await propertyFeatureFactory.save(),
          });
          return property;
        }),
    );
    const propertyRepo = dataSource.getRepository(Property);
    await propertyRepo.save(properties);
  }
}
