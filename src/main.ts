import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Function that bootstraps the api server
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    preflightContinue: false,
  });
  await app.listen(5500);
}
bootstrap();
