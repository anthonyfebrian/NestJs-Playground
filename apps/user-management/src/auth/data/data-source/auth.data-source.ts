import { UserEntity } from "apps/user-management/src/users/data/entities/user.entity";
import { LoginEntity } from "../entity/login.entity";

export interface AuthDataSource {
    login(email:string, password:string): Promise<LoginEntity>
}