import { ApiProperty } from '@nestjs/swagger';
import { InferType, number, object, string } from 'yup';

export class CreatePaymentDto {
  @ApiProperty()
  orderId!: string;

  @ApiProperty()
  amount!: number;
}

export const createPaymentSchema = object({
  orderId: string().required(),
  amount: number().positive().required(),
});

export type CreatePaymentSchema = InferType<typeof createPaymentSchema>;
