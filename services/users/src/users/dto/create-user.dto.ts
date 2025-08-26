import { ApiProperty } from '@nestjs/swagger';
import { InferType, object, string } from 'yup';

export class CreateUserDto {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  email!: string;
}

export const createUserSchema = object({
  name: string().required(),
  email: string().email().required(),
});

export type CreateUserSchema = InferType<typeof createUserSchema>;
