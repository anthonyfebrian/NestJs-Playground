import { UserEntity } from "apps/user-management/src/users/data/entities/user.entity";

export interface AuthDataSource {
    login(email:string, password:string): Promise<UserEntity>
}