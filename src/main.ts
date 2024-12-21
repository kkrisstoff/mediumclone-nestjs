// TODO: is it needed?
if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const PORT = process.env.PORT
// const devMode = process.env.DEV
const devMode = true;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: !!devMode });
  await app.listen(3010);
}

bootstrap();
