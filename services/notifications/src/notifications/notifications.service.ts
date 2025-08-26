import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { kafkaService } from '@e-commerce/event-bus';

@Injectable()
export class NotificationsService implements OnModuleInit {
  async onModuleInit() {
    await kafkaService.subscribe('order_created', 'notifications', async (order) => {
      console.log('Sending notification for order', order);
    });
  }

  create(data: CreateNotificationDto) {
    return { message: 'Notification sent', data };
  }
}
