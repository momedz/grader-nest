import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  modelName: 'challenge',
  timestamps: true,
  deletedAt: true,
})
export class Challenge extends Model {
  @Column
  name: string;
}
