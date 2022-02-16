import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDTO } from './dto/create-language.dto';
import { Language } from './models/language.model';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language)
    private languageModel: typeof Language,
  ) {}

  findAll(query): Promise<Language[]> {
    return this.languageModel.findAll(query);
  }

  findById(id: string): Promise<Language> {
    return this.languageModel.findByPk(id);
  }

  create(dto: CreateLanguageDTO): Promise<Language> {
    return this.languageModel.create({
      ...dto,
    });
  }
}
