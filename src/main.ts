import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as expressLayouts from 'express-ejs-layouts';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

 // Phát hiện môi trường
  const isDev = process.env.NODE_ENV !== 'production';

  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Đặt lại đường dẫn views
  const viewsPath = isDev
    ? join(__dirname, '..', 'src', 'views')  // chạy dev
    : join(__dirname, 'views');             // chạy dist
    
  app.use(expressLayouts);
  app.setBaseViewsDir(viewsPath);
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();