"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const prisma_service_1 = require("./prisma/prisma.service");
const axios_2 = require("axios");
const tough_cookie_1 = require("tough-cookie");
let AppService = class AppService {
    constructor(httpService, prisma) {
        this.httpService = httpService;
        this.prisma = prisma;
        this.failures = 0;
        this.first = true;
        this.cookiejar = new tough_cookie_1.CookieJar();
    }
    async monitorTask() {
        const link = '[REDACTED]';
        if (this.failures > 10) {
            console.log('too many failures, skipping job');
            return;
        }
        let headers = {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'es-US,es;q=0.9',
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            'Sec-CH-UA': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'Sec-CH-UA-Mobile': '?0',
            'Sec-CH-UA-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        };
        const cookiesCount = await this.cookiejar.getCookies(link);
        if (cookiesCount.length > 0) {
            headers['Cookie'] = await this.cookiejar.getCookieString(link);
        }
        const start = performance.now();
        let end;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(link, {
                responseType: 'text',
                withCredentials: this.first,
                headers: headers,
                timeout: 10_000,
            }));
            end = performance.now();
            const time = end - start;
            const no_spaces = response.data.replaceAll(' ', '');
            const no_newlines = no_spaces.replaceAll(/(\r\n|\n|\r)/g, '');
            await this.prisma.requestLogs.create({
                data: {
                    headers: JSON.stringify(response.headers),
                    html: no_newlines,
                    roundtrip: time,
                    status: response.status,
                    sent_headers: JSON.stringify(headers),
                    sent_cookies: headers['Cookie'] ?? 'No cookies',
                },
            });
            await this.checkForNewCookies(response.headers, link);
            if (response.status !== 200) {
                this.failures = this.failures + 1;
            }
            console.log(new Date().toLocaleString(), ' status = ', response.status);
        }
        catch (error) {
            end = performance.now();
            const time = end - start;
            const status = error.response?.status ?? 0;
            const headersFromError = error.response?.headers
                ? JSON.stringify(error.response.headers)
                : 'No headers';
            const htmlFromError = error.response?.data
                ? JSON.stringify(error.response.data)
                : 'No HTML body';
            let error_info;
            if (axios_2.default.isAxiosError(error)) {
                const err = error;
                error_info = JSON.stringify({
                    message: err.message,
                    code: err.code,
                    status: err.response?.status ?? 0,
                    url: err.config?.url,
                });
            }
            else {
                error_info = JSON.stringify(error);
            }
            await this.prisma.requestLogs.create({
                data: {
                    headers: headersFromError,
                    html: htmlFromError,
                    roundtrip: time,
                    status: status,
                    sent_headers: JSON.stringify(headers),
                    sent_cookies: headers['Cookie'] ?? 'No cookies',
                    error_info: error_info,
                },
            });
            this.failures = this.failures + 1;
            console.log(new Date().toLocaleString(), ' status = ', status);
        }
        this.first = false;
    }
    async checkForNewCookies(headers, url) {
        if (headers['set-cookie'] && headers['set-cookie'].length > 0) {
            const cookies = headers['set-cookie'];
            for (const cookie of cookies) {
                const name = cookie.split('=')[0];
                const value = cookie.split('=')[1];
                await this.cookiejar.setCookie(cookie, url);
                await this.prisma.cookieLogs.create({
                    data: {
                        name: name,
                        value: value,
                    },
                });
            }
        }
    }
};
exports.AppService = AppService;
__decorate([
    (0, schedule_1.Cron)('* * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppService.prototype, "monitorTask", null);
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map