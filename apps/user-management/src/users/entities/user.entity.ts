import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../roles/entities/role.entity";

@Entity('users')
export class User {
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

    @ManyToOne(() => Role, { eager: true })
    @JoinColumn({ name: 'role_id' })
    role: Role
}
