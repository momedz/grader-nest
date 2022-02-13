import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChallengeController } from './challenges.controller';
import { ChallengeService } from './challenges.service';
import { Challenge } from './models/challenge.model';

@Module({
  imports: [SequelizeModule.forFeature([Challenge])],
  controllers: [ChallengeController],
  providers: [ChallengeService],
})
export class ChallengeModule {}
