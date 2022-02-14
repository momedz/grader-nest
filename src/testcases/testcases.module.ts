import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestCase } from './models/testcase.model';

@Module({
  imports: [SequelizeModule.forFeature([TestCase])],
  controllers: [],
  providers: [],
})
export class TestCaseModule {}
