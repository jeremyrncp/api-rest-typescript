import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import {DateService} from "./date.service";

@Injectable()
export class WeatherService {
    constructor(private readonly dateService: DateService) {}

    async getWeatherByDate(woeid: string, date: string): Promise<any> {
        const response = await fetch('https://www.metaweather.com/api/location/' + woeid);
        const data = await response.json();

        return this.getMinAndMaxTempByDay(data, this.dateService.convertFrenchDateToUsDate(date));
    }

    getMinAndMaxTempByDay(data: object, date: string): object {
        let weatherData = {};
        data['consolidated_weather'].forEach(
            (weatherConsolated) => {
                if (weatherConsolated.applicable_date === date) {
                    weatherData = {
                        min_temp: weatherConsolated.min_temp,
                        max_temp: weatherConsolated.max_temp
                    }
                }
            });
        return weatherData;
    }
}
