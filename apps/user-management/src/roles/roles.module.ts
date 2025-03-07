import { Module } from '@nestjs/common';
import { RolesController } from './presentation/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './data/entities/role.entity';
import { RoleDataSourceImpl } from './data/data-source/implementation/role.data-source.impl';
import { RoleRepositoryImpl } from './data/repository/role.repository.impl';
import { GetRolesUseCaseImpl } from './domain/use-case/implementation/get-roles.use-case.impl';
import { GetOneRoleUseCaseImpl } from './domain/use-case/implementation/get-one-role.use-case.impl';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [
    {
      provide: 'RoleDataSource',
      useClass: RoleDataSourceImpl,
    },
    {
      provide: 'RoleRepository',
      useClass: RoleRepositoryImpl,
    },
    {
      provide: 'GetRolesUseCase',
      useClass: GetRolesUseCaseImpl,
    },
    {
      provide: 'GetOneRoleUseCase',
      useClass: GetOneRoleUseCaseImpl,
    }
  ],
  controllers: [RolesController],
})
export class RolesModule {}
