import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AmqpService } from 'src/amqp.service';
import { CreateUserChallengeDTO } from './dto/create-user-challenge.dto';
import { UserChallenge } from './models/user-challenge.model';

@Injectable()
export class UserChallengeService {
  private exchange = 'grader.job.topic';

  constructor(
    private readonly amqpService: AmqpService,
    @InjectModel(UserChallenge)
    private userChallengeService: typeof UserChallenge,
  ) {}

  send() {
    this.amqpService.send(this.exchange, 'HelloWorld');
  }

  findAll(query): Promise<UserChallenge[]> {
    return this.userChallengeService.findAll(query);
  }

  findById(id): Promise<UserChallenge> {
    return this.userChallengeService.findByPk(id);
  }

  create(dto: CreateUserChallengeDTO): Promise<UserChallenge> {
    return this.userChallengeService.create({
      ...dto,
    });
  }
}
