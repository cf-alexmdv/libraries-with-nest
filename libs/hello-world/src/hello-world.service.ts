import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  private readonly logger = new Logger(HelloWorldService.name);
  logHello(): void {
    this.logger.log('Hello World');
  }
}
