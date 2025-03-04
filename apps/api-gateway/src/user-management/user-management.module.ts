import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RolesModule, AuthModule, UsersModule]
})
export class UserManagementModule {}
