import { BelongsTo, Column, DataType, ForeignKey, Model, NotEmpty, Table } from 'sequelize-typescript';
import { TestCase } from 'src/testcases/models/testcase.model';
import { UserChallenge } from './user-challenge.model';

@Table({
  modelName: 'user_challenge_testcases',
  timestamps: true,
  deletedAt: true,
})
export class UserChallengeTestCase extends Model {
  @ForeignKey(() => UserChallenge)
  @Column(DataType.INTEGER)
  user_challenge_id: number;

  @BelongsTo(() => UserChallenge, 'user_challenge_id')
  user_challenge: UserChallenge;

  @ForeignKey(() => TestCase)
  @Column(DataType.INTEGER)
  testcase_id: number;

  @BelongsTo(() => TestCase, 'testcase_id')
  testcase: TestCase;

  @NotEmpty
  @Column(DataType.ENUM('WRONG', 'CORRECT', 'TIMEOUT'))
  state: string;

  @Column
  testcase_answer: string;
}
