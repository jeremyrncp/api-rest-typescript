import { Injectable } from '@nestjs/common';
const validateDate = require('validate-date');
import { intToRoman } from 'roman-arabic-converter';

@Injectable()
export class DateService {
  dateValidation(date: string): boolean {
    if(!validateDate(date, "boolean", "dd/mm/yyyy")) {
      throw "Invalid date format (valid format: dd/mm/YYYY)";
    }

    return true;
  }
  convertFrenchDateToUsDate(date: string): string {
    this.dateValidation(date);
    const dateSplit = date.split('/');
    return dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0];
  }

  transformArabicDateToRoman(date: string): string {
      this.dateValidation(date);
      const dateSplit = date.split('/');

      const day: number = parseInt(dateSplit[0]);
      const month: number = parseInt(dateSplit[1]);
      const year: number = parseInt(dateSplit[2]);

      return intToRoman(day) + '/' + intToRoman(month) + '/' + intToRoman(year);
  }
}
