import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { kafkaService } from '@e-commerce/event-bus';

@Injectable()
export class OrdersService {
  async create(data: CreateOrderDto) {
    const order = { ...data, id: Date.now() };
    await kafkaService.emit('order_created', order);
    return order;
  }
}
