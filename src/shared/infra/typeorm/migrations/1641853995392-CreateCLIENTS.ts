import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export default class CreateCLIENTS1641853995392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "CLIENTS",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "veterinary_id",
            type: "int",
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "telephone",
            type: "varchar",
            length: "20",
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
    await queryRunner.createForeignKey(
      "CLIENTS",
      new TableForeignKey({
        columnNames: ["veterinary_id"],

        referencedColumnNames: ["id"],

        referencedTableName: "VETERINARIANS",

        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("CLIENTS");
  }
}
