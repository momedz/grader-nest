import { UUIDV4 } from 'sequelize';
import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  modelName: 'user',
  timestamps: true,
  deletedAt: true,
})
export class User extends Model {
  @Default(UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  name: string;
}
