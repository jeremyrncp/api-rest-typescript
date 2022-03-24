import { Injectable } from '@nestjs/common';
const validateDate = require('validate-date');
import { intToRoman } from 'roman-arabic-converter';

@Injectable()
export class DateService {
  dateValidation(date: string): string {
    return validateDate(date, "boolean", "dd/mm/yyyy");
  }
  transformRomanDateToArabic(date: string): string {
    if (this.dateValidation(date)) {
      const dateSplit = date.split('/');

      const day: number = parseInt(dateSplit[0]);
      const month: number = parseInt(dateSplit[1]);
      const year: number = parseInt(dateSplit[2]);

      return intToRoman(day) + '/' + intToRoman(month) + '/' + intToRoman(year);
    } else {
      throw "Invalid date format (valid format: dd/mm/YYYY)";
    }
  }
}
