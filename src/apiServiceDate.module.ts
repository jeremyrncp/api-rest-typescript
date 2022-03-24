import { Module } from '@nestjs/common';
import { DateService } from './date.service';
import {ApiServiceDateController} from "./apiServiceDate.controller";
import {ApiServiceWeatherModule} from "./apiServiceWeather.module";

@Module({
  imports: [ApiServiceWeatherModule],
  controllers: [ApiServiceDateController],
  providers: [DateService],
})
export class ApiServiceDateModule {}
