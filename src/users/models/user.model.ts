import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  modelName: 'user',
  timestamps: true,
  deletedAt: true,
})
export class User extends Model {
  @Column
  name: string;
}
