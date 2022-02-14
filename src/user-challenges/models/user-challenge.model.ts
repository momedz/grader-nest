import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Challenge } from 'src/challenges/models/challenge.model';
import { User } from 'src/users/models/user.model';
import { UserChallengeTestCase } from './user-challenge-testcase.model';

@Table({
  modelName: 'user_challenges',
  timestamps: true,
  deletedAt: true,
})
export class UserChallenge extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  user_id: number;

  @BelongsTo(() => User, 'user_id')
  user: User;

  @ForeignKey(() => Challenge)
  @Column(DataType.INTEGER)
  challenge_id: number;

  @BelongsTo(() => Challenge, 'challenge_id')
  challenge: Challenge;

  @Column(DataType.INTEGER)
  score: number;

  @Column
  testcase_answer: string;

  @HasMany(() => UserChallengeTestCase)
  user_challenge_testcases: UserChallengeTestCase[];
}
