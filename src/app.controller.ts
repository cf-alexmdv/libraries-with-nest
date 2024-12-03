import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomHeader } from '@app/request-decorator/custom-header.decorator';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@CustomHeader() customHeader: string): string {
    this.logger.log(`customHeader=${customHeader}`);
    return this.appService.getHello();
  }
}
