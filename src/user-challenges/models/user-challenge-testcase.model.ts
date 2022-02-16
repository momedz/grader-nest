import { UUIDV4 } from 'sequelize';
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { TestCase } from 'src/testcases/models/testcase.model';
import { UserChallenge } from './user-challenge.model';

@Table({
  modelName: 'user_challenge_testcase',
  timestamps: true,
  deletedAt: true,
})
export class UserChallengeTestCase extends Model {
  @Default(UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @ForeignKey(() => UserChallenge)
  @Column(DataType.UUID)
  user_challenge_id: number;

  @BelongsTo(() => UserChallenge, 'user_challenge_id')
  user_challenge: UserChallenge;

  @AllowNull(false)
  @ForeignKey(() => TestCase)
  @Column(DataType.UUID)
  testcase_id: number;

  @BelongsTo(() => TestCase, 'testcase_id')
  testcase: TestCase;

  @AllowNull(false)
  @Column(DataType.ENUM('WRONG', 'CORRECT', 'TIMEOUT'))
  state: string;

  @Column
  testcase_answer: string;
}
