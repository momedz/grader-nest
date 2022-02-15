import { UUIDV4 } from 'sequelize';
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { Model, Table } from 'sequelize-typescript';
import { Chapter } from 'src/chapters/models/chapter.model';
import { TestCase } from 'src/testcases/models/testcase.model';

@Table({
  modelName: 'challenge',
  timestamps: true,
  deletedAt: true,
})
export class Challenge extends Model {
  @Default(UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @ForeignKey(() => Chapter)
  @Column(DataType.UUID)
  chapter_id: string;

  @BelongsTo(() => Chapter, 'chapter_id')
  chapter: Chapter;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description: string;

  @AllowNull(false)
  @Default('NORMAL')
  @Column(DataType.ENUM('NORMAL', 'HARD'))
  difficulty: string;

  @Default(0)
  @Column(DataType.TINYINT)
  level: number;

  @HasMany(() => TestCase)
  testcases: TestCase[];
}
