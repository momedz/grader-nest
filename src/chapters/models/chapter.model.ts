import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Challenge } from 'src/challenges/models/challenge.model';

@Table({
  modelName: 'chapter',
  timestamps: true,
  deletedAt: true,
})
export class Chapter extends Model {
  @Column
  title: string;

  @HasMany(() => Challenge)
  challenges: Challenge[];
}
