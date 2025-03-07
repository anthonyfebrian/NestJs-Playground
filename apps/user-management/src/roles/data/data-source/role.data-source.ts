import { RoleEntity } from "../entities/role.entity"

export interface RoleDataSource {
    findAll(): Promise<RoleEntity[]>
    findOne(id: number): Promise<RoleEntity>
 }