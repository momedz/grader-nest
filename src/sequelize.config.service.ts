import { Injectable } from '@nestjs/common';
import { SequelizeOptionsFactory } from '@nestjs/sequelize';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'grader-nest',
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
