import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/check-health')
  checkHealth2(): boolean {
    return this.appService.checkHealth2();
  }

  @Get('/check-health')
  async checkHealth() {
    return { health: true };
  }
}
