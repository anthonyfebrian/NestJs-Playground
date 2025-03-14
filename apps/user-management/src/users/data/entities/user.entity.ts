import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "../../../roles/data/entities/role.entity";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ name: 'first_name' })
    firstName: string

    @Column({ name: 'last_name' })
    lastName: string

    @ManyToOne(() => RoleEntity, { eager: true })
    @JoinColumn({ name: 'role_id' })
    role: RoleEntity
}
