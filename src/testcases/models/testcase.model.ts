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
import { Challenge } from 'src/challenges/models/challenge.model';

@Table({
  modelName: 'testcase',
  timestamps: true,
  deletedAt: true,
})
export class TestCase extends Model {
  @Default(UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @ForeignKey(() => Challenge)
  @Column(DataType.UUID)
  challenge_id: number;

  @BelongsTo(() => Challenge, 'challenge_id')
  challenge: Challenge;

  @Column
  input: string;

  @Column
  output: string;
}
