import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateDEATH_NOTE1643214716250 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "DEATH_NOTE",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "client_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "chicken_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "mortality_value",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "amount",
                        type: "int",
                        isNullable: true,
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


        await queryRunner.createForeignKey(
            "DEATH_NOTE",
            new TableForeignKey({
                columnNames: ["client_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "CLIENTS",
            })
        );

        await queryRunner.createForeignKey(
            "DEATH_NOTE",
            new TableForeignKey({
                columnNames: ["chicken_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "CHICKENS",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("DEATH_NOTE");
    }
}

