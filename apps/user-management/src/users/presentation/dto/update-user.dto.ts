import { CreateUserDto } from '@app/shared/user-management/users/dto/create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
}
