import { Observable } from "rxjs";
import { Role } from "../entities/role";

export interface GetRolesUseCase {
    execute(): Observable<Role[]>;
}