import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from '../../users.service';
import { USERS_PATTERNS } from '@app/shared/user-management/users/users.patterns';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserDataSource } from '../../data/data-source/users.data-source';
import { CreateUserDto } from '@app/shared/user-management/users/dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject('UserDataSource')
    private readonly dataSource:UserDataSource,
  ) {}

  @MessagePattern(USERS_PATTERNS.CREATE)
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern(USERS_PATTERNS.FIND_ALL)
  findAll() {
    return this.dataSource.findAll()
  }

  @MessagePattern(USERS_PATTERNS.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.dataSource.findOne(id)
  }

  @MessagePattern(USERS_PATTERNS.UPDATE)
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern(USERS_PATTERNS.DELETE)
  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
