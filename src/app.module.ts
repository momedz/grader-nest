import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ChallengeModule } from './challenges/challenges.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { LoggerMiddleware } from './logger.middleware';
import { SequelizeConfigService } from './sequelize.config.service';
import { ChapterModule } from './chapters/chapters.module';
import { UserModule } from './users/users.module';
import { TestCaseModule } from './testcases/testcases.module';
import { UserChallengeModule } from './user-challenges/user-challenges.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('challenges');
  }
}
