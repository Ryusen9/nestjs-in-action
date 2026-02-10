import { BadRequestException, PipeTransform } from '@nestjs/common';
// import { error } from 'console';
import { ZodSchema } from 'zod/v3';

export class zodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any) {
    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) {
      return parsedValue;
    }
    throw new BadRequestException(parsedValue.error.format());
  }
}
