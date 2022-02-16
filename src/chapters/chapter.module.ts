import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';
import { Chapter } from './models/chapter.model';

@Module({
  imports: [SequelizeModule.forFeature([Chapter])],
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule {}
