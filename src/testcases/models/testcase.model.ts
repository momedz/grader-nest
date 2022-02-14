import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Challenge } from 'src/challenges/models/challenge.model';

@Table({
  modelName: 'testcases',
  timestamps: true,
  deletedAt: true,
})
export class TestCase extends Model {
  @Column
  name: string;

  @ForeignKey(() => Challenge)
  @Column(DataType.INTEGER)
  challenge_id: number;

  @BelongsTo(() => Challenge, 'challenge_id')
  challenge: Challenge;

  @Column
  input: string;

  @Column
  output: string;
}
