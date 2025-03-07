import { Observable } from "rxjs";
import { Role } from "../entities/role";

export interface GetOneRoleUseCase {
    execute(id: number): Observable<Role>;
}