import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './data/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './presentation/dto/create-user.dto';
import { UpdateUserDto } from './presentation/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
  ) {
    console.log('UsersService constructor');
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    const user = this.repository.findOneBy({ id })
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return this.repository.findOneBy({ id })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
