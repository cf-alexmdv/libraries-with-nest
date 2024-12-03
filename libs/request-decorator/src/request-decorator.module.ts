import { Module } from '@nestjs/common';
import { RequestDecoratorService } from './request-decorator.service';

@Module({
  providers: [RequestDecoratorService],
  exports: [RequestDecoratorService],
})
export class RequestDecoratorModule {}
