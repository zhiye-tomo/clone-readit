import {MigrationInterface, QueryRunner} from "typeorm";

export class createVotesTable1641294069706 implements MigrationInterface {
    name = 'createVotesTable1641294069706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_42377e3f89a203ca74d117e5961\` ON \`posts\``);
        await queryRunner.query(`ALTER TABLE \`subs\` CHANGE \`createAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`posts\` CHANGE \`createAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`createAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`comments\` CHANGE \`createAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`votes\` DROP COLUMN \`createAt\``);
        await queryRunner.query(`ALTER TABLE \`votes\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`votes\` CHANGE \`username\` \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`votes\` ADD CONSTRAINT \`FK_79326ff26ef790424d820d54a72\` FOREIGN KEY (\`username\`) REFERENCES \`users\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`votes\` ADD CONSTRAINT \`FK_b5b05adc89dda0614276a13a599\` FOREIGN KEY (\`postId\`) REFERENCES \`posts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`votes\` ADD CONSTRAINT \`FK_554879cbc33538bf15d6991f400\` FOREIGN KEY (\`commentId\`) REFERENCES \`comments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`FK_42377e3f89a203ca74d117e5961\` FOREIGN KEY (\`username\`) REFERENCES \`users\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`FK_42377e3f89a203ca74d117e5961\``);
        await queryRunner.query(`ALTER TABLE \`votes\` DROP FOREIGN KEY \`FK_554879cbc33538bf15d6991f400\``);
        await queryRunner.query(`ALTER TABLE \`votes\` DROP FOREIGN KEY \`FK_b5b05adc89dda0614276a13a599\``);
        await queryRunner.query(`ALTER TABLE \`votes\` DROP FOREIGN KEY \`FK_79326ff26ef790424d820d54a72\``);
        await queryRunner.query(`ALTER TABLE \`votes\` CHANGE \`username\` \`username\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`votes\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`votes\` ADD \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`comments\` CHANGE \`createdAt\` \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`createdAt\` \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`posts\` CHANGE \`createdAt\` \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`subs\` CHANGE \`createdAt\` \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`CREATE INDEX \`FK_42377e3f89a203ca74d117e5961\` ON \`posts\` (\`username\`)`);
    }

}
