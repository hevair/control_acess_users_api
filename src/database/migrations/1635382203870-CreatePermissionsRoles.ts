import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePermissionsRoles1635382203870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table(
                {
                    name: 'permissions_roles',
                    columns:[
                        {
                            name: 'permission_id',
                            type: 'uuid'
                            
                        },
                        {
                            name: 'role_id',
                            type: 'uuid'
                        }

                    ],
                    foreignKeys:[
                        {
                            name: 'fk_permission_role_',
                            columnNames:['permission_id'],
                            referencedTableName: 'permissions',
                            referencedColumnNames:['id'],
                            onDelete: 'restrict',
                            onUpdate: 'cascade'
                        },
                        {
                            name: 'fk_role_permission',
                            columnNames:['role_id'],
                            referencedTableName: 'roles',
                            referencedColumnNames:['id'],
                            onDelete: 'restrict',
                            onUpdate: 'cascade'
                        }
                    ]
                    
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('permissions_roles')
    }

}
