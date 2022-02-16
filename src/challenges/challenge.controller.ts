import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { CreateChallengeDTO } from './dto/create-challenge.dto';
import { Challenge } from './models/challenge.model';

@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get()
  findAll(@Query() query): Promise<Challenge[]> {
    return this.challengeService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Challenge> {
    return this.challengeService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateChallengeDTO): Promise<Challenge> {
    return this.challengeService.create(dto);
  }
}
