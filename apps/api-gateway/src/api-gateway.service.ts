import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ApiGatewayService {
  constructor() {}

  getHello(): string {
    return 'Hello World from api gateway!' + process.env.DATABASE_USER;
  }

  async getUserManagementHello() {
    return "Hello from User Management Service";
  }
}
