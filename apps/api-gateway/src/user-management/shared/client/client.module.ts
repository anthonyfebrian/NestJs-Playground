import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ClientsModule.register([
            {
                name: `${process.env.USER_MANAGEMENT_SERVICE}`,
                transport: Transport.RMQ,
                options: {
                    urls: [`${process.env.USER_MANAGEMENT_SERVICE_URL}`],
                    queue: `${process.env.USER_MANAGEMENT_QUEUE}`,
                    queueOptions: {
                        durable: false
                    }
                }
            }
        ])
    ],
    exports: [ClientsModule]
})
export class ClientModule { }
