import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity('Permissions')
export class Permission extends BaseEntity{

    @Column()
    name: string;

    @Column()
    description: string;

}