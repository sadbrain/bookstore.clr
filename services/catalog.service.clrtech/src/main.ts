import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const envFilePath = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`);

  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
  } else {
    dotenv.config({ path: path.resolve(__dirname, '../.env') });
  }

  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on ${process.env.NODE_ENV} env: ${await app.getUrl()}`);
}
bootstrap();