import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRoles1635382177061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table(
                {
                    name: 'roles',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true
                        },
                        {
                            name: 'name',
                            type: 'varchar',
                        },
                        {
                            name: 'description',
                            type: 'varchar'
                        },
                        {
                            name: 'create_at',
                            type: 'timestamp',
                            default: 'now()'
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('roles')
    }

}
