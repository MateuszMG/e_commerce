import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  create(data: CreateOrderDto) {
    return { ...data, id: Date.now() };
  }
}

