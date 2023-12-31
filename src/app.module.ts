import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MiddlewareEntryMiddleware } from './middleware-entry/middleware-entry.middleware';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import * as dotenv from 'dotenv';
import { User, UserSchema } from './schemas/users.schemas';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.LOCAL_DATA_PATH + 'testA'),
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddlewareEntryMiddleware).forRoutes('*');
  }
}
