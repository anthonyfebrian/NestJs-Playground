import { from, map, Observable } from "rxjs";
import { Role } from "../../domain/entities/role";
import { RoleRepository } from "../../domain/repository/role.repository";
import { RoleDataSource } from "../data-source/role.data-source";
import { Inject, Injectable } from "@nestjs/common";
import { roleEntityToDomain } from "../../utils/mapper/role.mapper";

@Injectable()
export class RoleRepositoryImpl implements RoleRepository {
    constructor(
        @Inject('RoleDataSource')
        private readonly dataSource: RoleDataSource
    ) { }
    findAll(): Observable<Role[]> {
        return from(this.dataSource.findAll())
            .pipe(
                map(data => data.map(item => roleEntityToDomain(item)))
            );
    }
    findOne(id: number): Observable<Role> {
        return from(this.dataSource.findOne(id))
            .pipe(
                map(data => roleEntityToDomain(data))
            );
    }
}