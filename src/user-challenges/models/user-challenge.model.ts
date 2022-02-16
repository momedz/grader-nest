import { UUIDV4 } from 'sequelize';
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Challenge } from 'src/challenges/models/challenge.model';
import { Language } from 'src/languages/models/language.model';
import { User } from 'src/users/models/user.model';
import { UserChallengeTestCase } from './user-challenge-testcase.model';

@Table({
  modelName: 'user_challenge',
  timestamps: true,
  deletedAt: true,
})
export class UserChallenge extends Model {
  @Default(UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.UUID)
  user_id: number;

  @BelongsTo(() => User, 'user_id')
  user: User;

  @AllowNull(false)
  @ForeignKey(() => Language)
  @Column(DataType.UUID)
  language_id: number;

  @BelongsTo(() => Language, 'language_id')
  language: Language;

  @AllowNull(false)
  @ForeignKey(() => Challenge)
  @Column(DataType.UUID)
  challenge_id: number;

  @BelongsTo(() => Challenge, 'challenge_id')
  challenge: Challenge;

  @Default(0)
  @Column(DataType.INTEGER)
  score: number;

  @Column
  testcase_answer: string;

  @Default('CREATE')
  @Column(DataType.ENUM('CREATE', 'RUNING', 'FINISH', 'ERROR'))
  status: string;

  @HasMany(() => UserChallengeTestCase)
  user_challenge_testcases: UserChallengeTestCase[];
}
