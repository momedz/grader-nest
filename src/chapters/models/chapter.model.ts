import { UUIDV4 } from 'sequelize';
import {
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Challenge } from 'src/challenges/models/challenge.model';

@Table({
  modelName: 'chapter',
  timestamps: true,
  deletedAt: true,
})
export class Chapter extends Model {
  @Default(UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  title: string;

  @HasMany(() => Challenge)
  challenges: Challenge[];
}
