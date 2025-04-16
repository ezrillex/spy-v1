import { HttpService } from '@nestjs/axios';
import { PrismaService } from './prisma/prisma.service';
import { CookieJar } from 'tough-cookie';
export declare class AppService {
    private readonly httpService;
    private readonly prisma;
    failures: number;
    first: boolean;
    cookiejar: CookieJar;
    constructor(httpService: HttpService, prisma: PrismaService);
    monitorTask(): Promise<void>;
    private checkForNewCookies;
}
