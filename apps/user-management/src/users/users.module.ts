import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './presentation/controller/users.controller';
import { UserEntity } from './data/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDataSourceImpl } from './data/data-source/implementation/users.data-source.impl';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
          provide: 'UserDataSource',
          useClass: UserDataSourceImpl,
    },
  ],
})
export class UsersModule {}
