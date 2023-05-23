import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsersData(): string {
    return 'user data';
  }

  getUserDetailData(): string {
    return 'user detail data';
  }
}