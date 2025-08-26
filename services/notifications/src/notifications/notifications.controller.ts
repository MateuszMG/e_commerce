import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto, createNotificationSchema } from './dto/create-notification.dto';
import { YupValidationPipe } from '../pipes/yup-validation.pipe';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Notification has been sent' })
  create(
    @Body(new YupValidationPipe(createNotificationSchema))
    body: CreateNotificationDto,
  ) {
    return this.notificationsService.create(body);
  }
}
