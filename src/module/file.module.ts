
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileController } from 'src/controller/file.controller';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [FileController],
})
export class FileModule {}
