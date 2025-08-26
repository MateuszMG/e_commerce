import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  create(data: CreatePaymentDto) {
    return { id: '1', ...data };
  }
}
