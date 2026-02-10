import { Faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/propertyFeature.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFeatureFactory = setSeederFactory(
  PropertyFeature,
  (faker: Faker) => {
    const propertyFeature = new PropertyFeature();
    propertyFeature.area = faker.number.int({ min: 50, max: 500 });
    propertyFeature.bathrooms = faker.number.int({ min: 1, max: 5 });
    propertyFeature.bedrooms = faker.number.int({ min: 1, max: 5 });
    propertyFeature.hasBalcony = faker.datatype.boolean();
    propertyFeature.hasGardenYard = faker.datatype.boolean();
    propertyFeature.hasSwimmingPool = faker.datatype.boolean();
    propertyFeature.parkingSpots = faker.number.int({ min: 0, max: 3 });
    return propertyFeature;
  },
);
