import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getUsersData(): string {
    return this.usersService.getUsersData();
  }

  @Get('/userDetail')
  getUserDetailData(): string {
    return this.usersService.getUserDetailData();
  }
}