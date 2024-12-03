import { Module } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

@Module({
  providers: [HelloWorldService],
  exports: [HelloWorldService],
})
export class HelloWorldModule {}
