import {Controller, Get, Query} from '@nestjs/common';
import { WeatherService } from "./weather.service";
import { DateService } from "./date.service";

@Controller()
export class ApiServiceWeatherController {
  constructor(private readonly weatherService: WeatherService, private readonly dateService: DateService) {}

  @Get("api/service/weather")
  async getWeather(@Query() query: {date: string, woeid: string}): Promise<object> {
      const romanDate = this.dateService.transformRomanDateToArabic(query.date);
      const weatherData = await this.weatherService.getWeatherByDate(query.woeid, query.date);

      return {
          romanDate: romanDate,
          weather: weatherData
      };
  }
}
