import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CreateLanguageDTO } from './dto/create-language.dto';
import { LanguageService } from './language.service';
import { Language } from './models/language.model';

@Controller('languages')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  findAll(@Query() query): Promise<Language[]> {
    return this.languageService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Language> {
    return this.languageService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateLanguageDTO): Promise<Language> {
    return this.languageService.create(dto);
  }
}
