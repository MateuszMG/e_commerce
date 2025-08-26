import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto, createPaymentSchema } from './dto/create-payment.dto';
import { YupValidationPipe } from '../pipes/yup-validation.pipe';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Payment has been created' })
  create(@Body(new YupValidationPipe(createPaymentSchema)) body: CreatePaymentDto) {
    return this.paymentsService.create(body);
  }
}
