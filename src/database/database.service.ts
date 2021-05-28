import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

const server = {
  type: 'mariadb' as 'mariadb',
  host: 'localhost',
  username: 'admin',
  user: 'admin',
  port: 3306,
  database: 'tst1',
  password: 'Tvs2020*',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  charset: 'UTF8_GENERAL_CI',
  logging: false,
};

const local = {
  type: 'mysql' as 'mysql',
  host: 'localhost',
  user: 'root',
  username: 'root',
  password: '',
  port: 3306,
  database: 'tst1',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  charset: 'UTF8_GENERAL_CI',
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
};

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return local as ConnectionOptions;
    },
  }),
];
