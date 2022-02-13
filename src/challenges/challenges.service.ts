import { Injectable } from '@nestjs/common';
import { Challenge } from './interfaces/challenge.interfaces';

@Injectable()
export class ChallengeService {
  getTest(): string {
    return 'Hello World!';
  }

  create(challenge: Challenge) {
    return challenge;
  }
}
