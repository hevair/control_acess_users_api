import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePermissions1635382158845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

            queryRunner.createTable(
                new Table(
                    {
                        name: 'permissions',
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
        queryRunner.dropTable('permissions')
    }

}
