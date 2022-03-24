import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
  validateDate(date: string): string {
    return 'Hello World!';
  }
}
