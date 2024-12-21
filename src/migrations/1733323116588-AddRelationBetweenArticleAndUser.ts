import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRelationBetweenArticleAndUser1733323116588 implements MigrationInterface {
  name = 'AddRelationBetweenArticleAndUser1733323116588';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "articles" ADD "authorId" integer`);
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_a9c5f4ec6cceb1604b4a3c84c87" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_a9c5f4ec6cceb1604b4a3c84c87"`,
    );
    await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "authorId"`);
  }
}
