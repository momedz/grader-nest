import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDTO } from './dto/create-chapter.dto';
import { Chapter } from './models/chapter.model';

@Controller('chapters')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Get()
  findAll(@Query() query): Promise<Chapter[]> {
    return this.chapterService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Chapter> {
    return this.chapterService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateChapterDTO): Promise<Chapter> {
    return this.chapterService.create(dto);
  }
}
