import { Test, TestingModule } from '@nestjs/testing';
import { DateService } from './date.service';
import { ApiServiceDateController } from "./apiServiceDate.controller";
import {Query} from "@nestjs/common";

describe('ApiServiceDateController', () => {
  let apiServiceDateController: ApiServiceDateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [apiServiceDateController],
      providers: [DateService],
    }).compile();

    apiServiceDateController = app.get<ApiServiceDateController>(ApiServiceDateController);
  });

  describe('date', () => {
    it('should return an error when date isnt valid', () => {
      expect(apiServiceDateController.getRomanToArabicConverter(@Query(): {date: string}).toThrow('Invalid date format (valid format: dd/mm/YYYY)');
    });
  });
});
