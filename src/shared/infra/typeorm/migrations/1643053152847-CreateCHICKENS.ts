import {
    MigrationInterface,
    QueryRunner,
    Table,
} from "typeorm";
export class CreateCHICKENS1643053152847 implements
    MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "CHICKENS",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("CHICKENS");
    }
}
