import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: 'mypassword',
  database: 'pg-mediunclone',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
};
