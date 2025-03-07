import { Observable } from "rxjs";
import { Role } from "../../entities/role";
import { GetRolesUseCase } from "../get-roles.use-case";
import { Inject, Injectable } from "@nestjs/common";
import { RoleRepository } from "../../repository/role.repository";

@Injectable()
export class GetRolesUseCaseImpl implements GetRolesUseCase {
    constructor(
        @Inject('RoleRepository')
        private readonly repository: RoleRepository
    ) { }
    execute(): Observable<Role[]> {
        return this.repository.findAll();
    }
}