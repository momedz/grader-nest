import { BelongsTo, Column, DataType, Default, ForeignKey, HasMany, NotEmpty, NotNull } from 'sequelize-typescript';
import { Model, Table } from 'sequelize-typescript';
import { Chapter } from 'src/chapters/models/chapter.model';
import { TestCase } from 'src/testcases/models/testcase.model';
import internal from 'stream';
@Table({
  modelName: 'challenge',
  timestamps: true,
  deletedAt: true,
})
export class Challenge extends Model {
  @ForeignKey(() => Chapter)
  @Column(DataType.INTEGER)
  chapter_id: number;

  @BelongsTo(() => Chapter, 'chapter_id')
  chapter: Chapter;

  @NotEmpty
  @Column
  title: string;

  @NotEmpty
  @Column(DataType.TEXT)
  description: string;

  @NotEmpty
  @Default('NORMAL')
  @Column(DataType.ENUM('NORMAL', 'HARD'))
  difficulty: string;

  @NotEmpty
  @Default(0)
  @Column(DataType.TINYINT)
  level: number;

  @HasMany(() => TestCase)
  testcases: TestCase[];
}
