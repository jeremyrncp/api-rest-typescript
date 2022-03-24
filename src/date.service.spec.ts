import { Test, TestingModule } from '@nestjs/testing';
import { DateService } from './date.service';

describe('DateService', () => {
  let dateService: DateService = new DateService();

  describe('Valid date', () => {
    it('should return an error when date isnt valid', () => {
      expect(() => {dateService.dateValidation('invalid date');}).toThrow('Invalid date format (valid format: dd/mm/YYYY)');
    });
    it('should return a success when date is valid', () => {
      expect(dateService.dateValidation('01/01/2022')).toBe(true);
    });
  });

  describe('French to US date conversion', () => {
    it('should return an error when date isnt valid', () => {
      expect(() => {dateService.convertFrenchDateToUsDate('invalid date');}).toThrow('Invalid date format (valid format: dd/mm/YYYY)');
    });
    it('should return a valid date', () => {
      expect(dateService.convertFrenchDateToUsDate('01/01/2022')).toBe('2022-01-01');
    });
  });

  describe('Roman date', () => {
    it('should return an error when date isnt valid', () => {
      expect(() => {dateService.transformRomanDateToArabic('invalid date');}).toThrow('Invalid date format (valid format: dd/mm/YYYY)');
    });
    it('should return a valid date', () => {
      expect(dateService.transformRomanDateToArabic('01/01/2022')).toBe('I/I/MMXXII');
    });
  });
});
