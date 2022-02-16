import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './models/language.model';

@Module({
  imports: [SequelizeModule.forFeature([Language])],
  controllers: [],
  providers: [],
})
export class LanguageModule {}
