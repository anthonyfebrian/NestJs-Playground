import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ClientModule } from './shared/client/client.module';

@Module({
  imports: [ClientModule, AuthModule, RolesModule, UsersModule]
})
export class UserManagementModule {}
