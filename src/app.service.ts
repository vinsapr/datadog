import { Injectable } from '@nestjs/common';
import ddlog from './utils/datadog/ddlog';

@Injectable()
export class AppService {
  checkHealth(): any {
    ddlog.info('[BE] Demo Datadog API Call', {
      color: 'black',
      time: { day: 4, month: 1, year: 2022 },
    });
    return { health: true };
  }
}
