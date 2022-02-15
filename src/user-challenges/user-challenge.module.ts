import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AmqpService } from 'src/amqp.service';
import { UserChallengeTestCase } from './models/user-challenge-testcase.model';
import { UserChallenge } from './models/user-challenge.model';
import { UserChallengeController } from './user-challenge.controller';
import { UserChallengeService } from './user-challenge.service';

@Module({
  imports: [SequelizeModule.forFeature([UserChallenge, UserChallengeTestCase])],
  controllers: [UserChallengeController],
  providers: [UserChallengeService, AmqpService],
})
export class UserChallengeModule {}
