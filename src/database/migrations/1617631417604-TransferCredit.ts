import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class TransferCredit1617631417604 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'credit_transfer',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'user_from_id', type: 'int', isNullable: false },
          { name: 'user_to_id', type: 'int', isNullable: false },
          { name: 'amount_credits', type: 'int', isNullable: false },
          { name: 'factor', type: 'float(11,2)', isNullable: false },
          { name: 'euro', type: 'int', isNullable: false },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'credit_transfer',
      new TableForeignKey({
        name: 'fk_credit_transfer-user_from_id',
        referencedTableName: 'user',
        columnNames: ['user_from_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'credit_transfer',
      new TableForeignKey({
        name: 'fk_credit_transfer-user_to_id',
        referencedTableName: 'user',
        columnNames: ['user_to_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
