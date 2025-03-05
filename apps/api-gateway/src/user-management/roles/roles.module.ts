import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { ClientModule } from '../shared/client/client.module';

@Module({
  imports: [
    ClientModule,
  ],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
