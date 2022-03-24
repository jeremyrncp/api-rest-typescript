import { Module } from '@nestjs/common';
import { DateService } from './date.service';
import {WeatherService} from "./weather.service";
import {ApiServiceWeatherController} from "./apiServiceWeather.controller";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [ApiServiceWeatherController],
  providers: [WeatherService, DateService],
})
export class ApiServiceWeatherModule {}
