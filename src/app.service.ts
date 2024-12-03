import { Injectable } from '@nestjs/common';
import { HelloWorldService } from '@alexmdv/hellow-world';

@Injectable()
export class AppService {
  constructor(private readonly helloWorldService: HelloWorldService) {}
  getHello(): string {
    this.helloWorldService.logHello();
    return 'Hello World!';
  }
}
