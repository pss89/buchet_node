import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import * as dotenv from 'dotenv';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { databaseConfig } from './config/database.config';

import { setupSwagger } from 'src/common/utils/swagger';

async function bootstrap() {
  // dotenv.config();

  const app = await NestFactory.create(AppModule);

  // await TypeOrmModule.forRoot(databaseConfig);

  await app.listen(3000);

  setupSwagger(app);
}
bootstrap();
