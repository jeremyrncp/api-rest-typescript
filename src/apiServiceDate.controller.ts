import {Controller, Get, HttpException, Query} from '@nestjs/common';
import {DateService} from "./date.service";

@Controller()
export class ApiServiceDateController {
  constructor(private readonly dateService: DateService) {}

  @Get("api/service/arabictoromanconverter")
  getArabicToRomanConverter(@Query() query: {date: string}): string {
      return this.dateService.transformArabicDateToRoman(query.date);
  }
}
