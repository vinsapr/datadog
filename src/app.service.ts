import { Injectable } from '@nestjs/common';
// Using local utils to send datadog via api call
import ddlog from './utils/datadog/ddlog';

@Injectable()
export class AppService {
  checkHealth2(): any {
    // Using local utils to send datadog via api call
    ddlog.info('[BE] Demo Datadog API Call', {
      color: 'black',
      time: { day: 4, month: 1, year: 2022 },
    });

    // Using lambda forwarder

    // Using flashcoffee package
    return { health: true };
  }
}
