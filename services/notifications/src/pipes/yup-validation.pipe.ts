import { BadRequestException, PipeTransform } from '@nestjs/common';
import { AnySchema } from 'yup';

export class YupValidationPipe implements PipeTransform {
  constructor(private schema: AnySchema) {}

  async transform(value: unknown) {
    try {
      return await this.schema.validate(value, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (e) {
      const error = e as { errors: string[] };
      throw new BadRequestException(error.errors);
    }
  }
}
