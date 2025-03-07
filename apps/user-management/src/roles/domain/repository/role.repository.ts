import { Observable } from "rxjs"
import { Role } from "../entities/role"

export interface RoleRepository {
    findAll(): Observable<Role[]>
    findOne(id: number): Observable<Role>
}