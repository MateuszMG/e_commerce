import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  create(data: CreateNotificationDto) {
    return { message: 'Notification sent', data };
  }
}
