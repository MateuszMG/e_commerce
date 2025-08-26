import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, createUserSchema } from './dto/create-user.dto';
import { YupValidationPipe } from '../pipes/yup-validation.pipe';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'User has been created' })
  create(@Body(new YupValidationPipe(createUserSchema)) body: CreateUserDto) {
    return this.usersService.create(body);
  }
}
