import { RoleEntity } from "../../data/entities/role.entity";
import { Role } from "../../domain/entities/role";

export function roleEntityToDomain(entity:RoleEntity): Role {
    return new Role(
        entity.id,
        entity.name,
    )
}