import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFollows1734711136767 implements MigrationInterface {
  name = 'CreateFollows1734711136767';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "follows" DROP COLUMN "folllowerId"`);
    await queryRunner.query(`ALTER TABLE "follows" DROP COLUMN "folllowingId"`);
    await queryRunner.query(`ALTER TABLE "follows" ADD "followerId" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "follows" ADD "followingId" integer NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "follows" DROP COLUMN "followingId"`);
    await queryRunner.query(`ALTER TABLE "follows" DROP COLUMN "followerId"`);
    await queryRunner.query(`ALTER TABLE "follows" ADD "folllowingId" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "follows" ADD "folllowerId" integer NOT NULL`);
  }
}
