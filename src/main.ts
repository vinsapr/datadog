import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv = require('dotenv');
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const { parsed } = dotenv.config({
  path: `${process.cwd()}/.env`,
});
process.env = { ...parsed, ...process.env };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('@flash-coffee/datadog')
    .setVersion('1.0.0')
    .setDescription('Flash Coffee Datadog Service Documentation')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.APP_PORT);
  console.info(`Server started at http://localhost:${process.env.APP_PORT}`);
  console.info(
    `Swagger started at http://localhost:${process.env.APP_PORT}/swagger`,
  );
}
bootstrap();
