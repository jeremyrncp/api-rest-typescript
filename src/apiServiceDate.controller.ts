import {Controller, Get, HttpException, Query} from '@nestjs/common';
import {DateService} from "./date.service";

@Controller()
export class AppController {
  constructor(private readonly dateService: DateService) {}

  @Get("api/service/romantoarabicconverter")
  getRomanToArabicConverter(@Query() query: {date: string}): string {
    console.log(this.dateService.validateDate(query.date));
    if(this.dateService.validateDate(query.date)) {
      return this.dateService.transformRomanDateToArabic(query.date);
    }
    else {
      throw new HttpException('Invalid date format (', 400);
    }
  }
}
