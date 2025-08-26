import { ApiProperty } from '@nestjs/swagger';
import { InferType, number, object } from 'yup';

export class CreateOrderDto {
  @ApiProperty()
  productId!: number;

  @ApiProperty()
  quantity!: number;
}

export const createOrderSchema = object({
  productId: number().required().positive().integer(),
  quantity: number().required().positive().integer(),
});

export type CreateOrderSchema = InferType<typeof createOrderSchema>;

