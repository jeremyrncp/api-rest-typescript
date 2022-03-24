import { Module } from '@nestjs/common';
import { DateService } from './date.service';
import {ApiServiceDateController} from "./apiServiceDate.controller";

@Module({
  imports: [],
  controllers: [ApiServiceDateController],
  providers: [DateService],
})
export class ApiServiceDateModule {}
