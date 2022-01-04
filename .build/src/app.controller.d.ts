import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    checkHealth2(): boolean;
    checkHealth(): Promise<{
        health: boolean;
    }>;
}
