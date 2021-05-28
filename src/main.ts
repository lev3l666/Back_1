/* tslint:disable */
import { NestFactory } from '@nestjs/core';
import { setRelativePath } from './globals';
import { AppModule } from './app.module';
import * as express from 'express';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';

const cronJobs = require('./cronJobs/index');

async function bootstrap() {
  setRelativePath(__dirname);
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  //process.env.TimeZone = 'America/Bogota';
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
  };
  app.enableCors(corsOptions);
  app.use('/web/files/', express.static('files/'))
    .use(
      rateLimit({
        windowMs: 60 * 1000, // 1 minutes, 15 * 60 * 1000 son 15 minutos
        max: 100, // limit each IP to 5 requests per windowMs
      }),
    ).use(helmet());

  await app.listen(AppModule.port, () => {
    console.log(`SERVER LISTENING ON PORT ${AppModule.port}`);
  });

  cronJobs.startCronJobs();
}

bootstrap().catch(err => console.log(err));
