import { UserEntity } from "../entities/user.entity"

export interface UserDataSource {
    create(
        email: string,
        password: string,
        firstName: string,
        lastName: string,
    ): Promise<UserEntity>
    findAll(): Promise<UserEntity[]>
    findOne(id: number): Promise<UserEntity>
    findByEmail(email: string): Promise<UserEntity | null>
}