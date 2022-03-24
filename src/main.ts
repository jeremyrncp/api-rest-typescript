import { NestFactory } from '@nestjs/core';
import { ApiServiceDateModule } from './apiServiceDate.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiServiceDateModule);
  await app.listen(3000);
}
bootstrap();
