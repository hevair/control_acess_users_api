import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Permission } from "./Permission";
import { Role } from "./Role";

@Entity('users')
export class Users extends BaseEntity {


    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: number;

    @ManyToMany(() => Role)
    @JoinTable({
        name: "users_roles",
        joinColumns: [{ name: "user_id" }],
        inverseJoinColumns: [{ name: "role_id" }],
    })
    roles: Role[];

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "users_permissions",
        joinColumns: [{ name: "user_id" }],
        inverseJoinColumns: [{ name: "permission_id" }],
    })
    permissions: Permission[];
}
