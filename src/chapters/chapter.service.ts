import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateChapterDTO } from './dto/create-chapter.dto';
import { Chapter } from './models/chapter.model';

@Injectable()
export class ChapterService {
  constructor(
    @InjectModel(Chapter)
    private chapterModel: typeof Chapter,
  ) {}
  getTest(): string {
    return 'Hello World!';
  }

  findAll(query): Promise<Chapter[]> {
    return this.chapterModel.findAll(query);
  }

  findById(id: string): Promise<Chapter> {
    return this.chapterModel.findByPk(id);
  }

  create(dto: CreateChapterDTO): Promise<Chapter> {
    return this.chapterModel.create({
      ...dto,
    });
  }
}
