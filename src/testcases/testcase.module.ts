import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestCase } from './models/testcase.model';
import { TestCaseController } from './testcase.controller';
import { TestCaseService } from './testcase.service';

@Module({
  imports: [SequelizeModule.forFeature([TestCase])],
  controllers: [TestCaseController],
  providers: [TestCaseService],
})
export class TestCaseModule {}
