import { Controller, Get } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) { }

  @Get()
  getHello(): string {
    return this.userManagementService.getHello();
  }

  @MessagePattern('helloUserManagement')
  helloUserManagement() {
    const message = 'Hello user management from microservices 2"'
    console.log(message)
    return message;
  }
}
