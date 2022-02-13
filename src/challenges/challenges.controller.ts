import { Controller, Get, Post } from '@nestjs/common';
import { ChallengeService } from './challenges.service';
import { CreateChallenge } from './dto/create-challenge.dto';

@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get()
  getTest(): string {
    return this.challengeService.getTest();
  }

  @Post()
  create(createChallenge: CreateChallenge) {
    return this.challengeService.create(createChallenge);
  }
}
