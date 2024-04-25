import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const errorResponse = exception.getResponse();

    response
      .status(status)
      .json({
        statusCode: status,
        ...(typeof errorResponse === 'object' ? errorResponse : { message: errorResponse }),
        timestamp: new Date().toISOString(),
        path: ctx.getRequest().url,
      });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración básica de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Gestión de Tareas')
    .setDescription('La API para gestionar tareas')
    .setVersion('1.0')
    .addTag('tareas')
    .build();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // quita las propiedades que no tienen decoradores de DTO
    forbidNonWhitelisted: true, // lanza errores cuando se reciben propiedades no permitidas
    transform: true, // transforma el payload para que coincida con los tipos de DTO
  }));

  app.use(helmet());
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // limita cada IP a 100 solicitudes por ventana (aquí, por 15 minutos)
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.use(limiter);
  app.useGlobalFilters(new HttpExceptionFilter());
  
  await app.listen(3000);
}
bootstrap();
