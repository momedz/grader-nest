import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Chapter } from './models/chapter.model';

@Module({
  imports: [SequelizeModule.forFeature([Chapter])],
  controllers: [],
  providers: [],
})
export class ChapterModule {}
