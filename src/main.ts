import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // view template : hbs
  app.useStaticAssets(join(__dirname, '..', 'public')); // css, javascript
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // html
  app.setViewEngine('hbs');

  await app.listen(8000);
}
bootstrap();
