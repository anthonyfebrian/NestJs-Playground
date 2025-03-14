import { UserEntity } from "../entities/user.entity"

export interface UserDataSource {
    findAll(): Promise<UserEntity[]>
    findOne(id: number): Promise<UserEntity>
}