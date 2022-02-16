import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTestCaseDTO } from './dto/create-testcase.dto';
import { TestCase } from './models/testcase.model';

@Injectable()
export class TestCaseService {
  constructor(
    @InjectModel(TestCase)
    private testCaseModel: typeof TestCase,
  ) {}

  findAll(query): Promise<TestCase[]> {
    return this.testCaseModel.findAll(query);
  }

  findById(id: string): Promise<TestCase> {
    return this.testCaseModel.findByPk(id);
  }

  create(dto: CreateTestCaseDTO): Promise<TestCase> {
    return this.testCaseModel.create({
      ...dto,
    });
  }
}
