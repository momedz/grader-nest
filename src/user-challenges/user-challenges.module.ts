import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserChallengeTestCase } from './models/user-challenge-testcase.model';
import { UserChallenge } from './models/user-challenge.model';

@Module({
  imports: [SequelizeModule.forFeature([UserChallenge, UserChallengeTestCase])],
  controllers: [],
  providers: [],
})
export class UserChallengeModule {}
