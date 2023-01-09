import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiPort = 3333;
  await app.listen(apiPort, () => {     console.log('Listening at http://localhost/:', apiPort);   });
  //await app.listen(3000);
}
bootstrap();
