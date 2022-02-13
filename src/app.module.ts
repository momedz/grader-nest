import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ChallengeModule } from './challenges/challenges.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { LoggerMiddleware } from './logger.middleware';
import { SequelizeConfigService } from './sequelize.config.service';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
    ChallengeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('challenges');
  }
}
