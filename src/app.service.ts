import { Injectable } from '@nestjs/common';
// Using local utils to send datadog via api call
import ddlog from './utils/datadog/ddlog';

@Injectable()
export class AppService {
  // Using local utils to send datadog via api call
  checkHealth(): any {
    ddlog.info('[BE] Demo Datadog API Call', {
      color: 'black',
      time: { day: 4, month: 1, year: 2022 },
    });
    return { health: true };

    // Using lambda forwarder

    // Using flashcoffee package
  }

  howAreYou(): any {
    return 'Awesome!!';
  }
}
