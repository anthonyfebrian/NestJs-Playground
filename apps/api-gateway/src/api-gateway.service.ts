import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ApiGatewayService {
  private readonly logger = new Logger(ApiGatewayService.name);

  constructor() {}

  getHello(): string {
    return 'Hello World from api gateway!' + process.env.DATABASE_USER;
  }

  async getUserManagementHello() {
    return "Hello from User Management Service";
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCronJob() {
    this.logger.debug(`Cron job is running every 30 seconds now :` + new Date());
  }
}
