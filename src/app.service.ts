// app.service.ts

import { Injectable } from '@nestjs/common';
// Importaciones adicionales si son necesarias...

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
