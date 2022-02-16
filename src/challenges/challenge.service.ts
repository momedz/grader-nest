import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateChallengeDTO } from './dto/create-challenge.dto';
import { Challenge } from './models/challenge.model';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel(Challenge)
    private challengeModel: typeof Challenge,
  ) {}

  findAll(query): Promise<Challenge[]> {
    return this.challengeModel.findAll(query);
  }

  findById(id: string): Promise<Challenge> {
    return this.challengeModel.findByPk(id);
  }

  create(dto: CreateChallengeDTO): Promise<Challenge> {
    return this.challengeModel.create({
      ...dto,
    });
  }
}
