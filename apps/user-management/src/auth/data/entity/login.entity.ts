import { UserEntity } from "apps/user-management/src/users/data/entities/user.entity";

export class LoginEntity {
    constructor(
        public user:UserEntity,
        public token: string,
    ) { }
}