import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DateService } from './date.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DateService],
})
export class AppModule {}
