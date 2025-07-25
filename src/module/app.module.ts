import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL as string, {
      dbName: process.env.DATABASE_NAME,
      // auth: {
      //   username: process.env.DATABASE_USER,
      //   password: process.env.DATABASE_PASS,
      // },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
