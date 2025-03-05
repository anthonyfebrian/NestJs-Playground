import { Module } from '@nestjs/common';
import { UserManagementController } from './user-management.controller';
import { UserManagementService } from './user-management.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles/entities/role.entity';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    RolesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.USER_MANAGEMENT_HOST}`,
      port: parseInt(`${process.env.USER_MANAGEMENT_PORT}`),
      username: `${process.env.USER_MANAGEMENT_USERNAME}`,
      password: `${process.env.USER_MANAGEMENT_PASSWORD}`,
      database: `${process.env.USER_MANAGEMENT_DATABASE}`,
      entities: [User, Role],
      synchronize: false,
    })
  ],
  controllers: [UserManagementController],
  providers: [UserManagementService],
})
export class UserManagementModule { }
