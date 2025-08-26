import { ApiProperty } from '@nestjs/swagger';
import { InferType, object, string } from 'yup';

export class CreateNotificationDto {
  @ApiProperty()
  recipient!: string;

  @ApiProperty()
  message!: string;
}

export const createNotificationSchema = object({
  recipient: string().required(),
  message: string().required(),
});

export type CreateNotificationSchema = InferType<typeof createNotificationSchema>;
