import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ApiGatewayService {
  constructor() {}

  getHello(): string {
    return 'Hello World from api gateway!' + process.env.DATABASE_USER;
  }

  async getUserManagementHello() {
    return "Hello from User Management Service";
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCronJob() {
    console.log('Cron job is running every 30 seconds now :' + new Date());
  }
}
