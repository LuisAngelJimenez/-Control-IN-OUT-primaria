import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getPrimera(): string {
    return 'Primera entrada!';
  }
}
