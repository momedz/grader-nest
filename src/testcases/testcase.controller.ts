import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTestCaseDTO } from './dto/create-testcase.dto';
import { TestCase } from './models/testcase.model';
import { TestCaseService } from './testcase.service';

@Controller('testcases')
export class TestCaseController {
  constructor(private readonly testCaseService: TestCaseService) {}

  @Get()
  findAll(@Query() query): Promise<TestCase[]> {
    return this.testCaseService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<TestCase> {
    return this.testCaseService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateTestCaseDTO): Promise<TestCase> {
    return this.testCaseService.create(dto);
  }
}
