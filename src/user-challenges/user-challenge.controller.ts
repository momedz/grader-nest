import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserChallengeDTO } from './dto/create-user-challenge.dto';
import { UserChallenge } from './models/user-challenge.model';
import { UserChallengeService } from './user-challenge.service';

@Controller('user-challenges')
export class UserChallengeController {
  constructor(private readonly userChallengeService: UserChallengeService) {}

  @Get()
  findAll(@Query() query): Promise<UserChallenge[]> {
    return this.userChallengeService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<UserChallenge> {
    return this.userChallengeService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateUserChallengeDTO): Promise<UserChallenge> {
    return this.userChallengeService.create(dto);
  }
}
