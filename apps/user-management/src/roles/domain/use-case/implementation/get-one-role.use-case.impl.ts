import { Observable } from "rxjs";
import { Role } from "../../entities/role";
import { GetOneRoleUseCase } from "../get-one-role.use-case";
import { Inject, Injectable } from "@nestjs/common";
import { RoleRepository } from "../../repository/role.repository";

@Injectable()
export class GetOneRoleUseCaseImpl implements GetOneRoleUseCase {
    constructor(
        @Inject('RoleRepository')
        private readonly repository: RoleRepository,
    ) { }
    execute(id: number): Observable<Role> {
        return this.repository.findOne(id);
    }
}