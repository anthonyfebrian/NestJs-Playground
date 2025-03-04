import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('USER_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World from api gateway!' + process.env.DATABASE_USER;
  }

  async getUserManagementHello() {
    return this.client.send('helloUserManagement', {});
  }
}
