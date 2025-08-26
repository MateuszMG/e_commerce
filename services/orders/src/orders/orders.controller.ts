import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto, createOrderSchema } from './dto/create-order.dto';
import { YupValidationPipe } from '../pipes/yup-validation.pipe';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Order has been created' })
  create(@Body(new YupValidationPipe(createOrderSchema)) body: CreateOrderDto) {
    return this.ordersService.create(body);
  }
}

