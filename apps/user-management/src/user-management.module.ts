import { Module } from '@nestjs/common';
import { UserManagementController } from './user-management.controller';
import { UserManagementService } from './user-management.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles/entities/role.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    AuthModule,
    RolesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'nest_playground',
      entities: [User, Role],
      synchronize: false,
    })
   ],
  controllers: [UserManagementController],
  providers: [UserManagementService],
})
export class UserManagementModule {}
