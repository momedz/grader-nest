import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ChallengeModule } from './challenges/challenge.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { LoggerMiddleware } from './logger.middleware';
import { SequelizeConfigService } from './sequelize.config.service';
import { ChapterModule } from './chapters/chapter.module';
import { UserModule } from './users/user.module';
import { TestCaseModule } from './testcases/testcase.module';
import { UserChallengeModule } from './user-challenges/user-challenge.module';
import { LanguageModule } from './languages/language.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
    ChallengeModule,
    ChapterModule,
    UserModule,
    TestCaseModule,
    UserChallengeModule,
    LanguageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('challenges');
  }
}
