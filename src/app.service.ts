import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from './prisma/prisma.service';
import { RawAxiosResponseHeaders } from 'axios';
import { CookieJar } from 'tough-cookie';

@Injectable()
export class AppService {
  failures = 0; // basic stop if failing
  first = true;
  cookiejar = new CookieJar();

  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  @Cron('* * * * *')
  async monitorTask() {
    const link = '[REDACTED]';

    if (this.failures > 10) {
      // todo dynamically modify this cronjob on registry
      console.log('too many failures, skipping job');
      return;
    }

    let headers = {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'es-US,es;q=0.9',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      'Sec-CH-UA':
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      'Sec-CH-UA-Mobile': '?0',
      'Sec-CH-UA-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    };

    const cookiesCount = await this.cookiejar.getCookies(link);
    if (cookiesCount.length > 0) {
      headers['Cookie'] = await this.cookiejar.getCookieString(link);
    }

    const start = performance.now();
    const response = await firstValueFrom(
      this.httpService.get(link, {
        responseType: 'text',
        withCredentials: this.first,
        headers: headers,
      }),
    );
    const end = performance.now();
    const time = end - start;
    this.first = false;

    const no_spaces = (response.data as string).replaceAll(' ', '');
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

  private async checkForNewCookies(
    headers: RawAxiosResponseHeaders,
    url: string,
  ) {
    // handle if server sends new cookies when performing a request. No error scenario, just search and update.
    if (headers['set-cookie'] && headers['set-cookie'].length > 0) {
      const cookies = headers['set-cookie'];
      for (const cookie of cookies) {
        const name = cookie.split('=')[0];
        const value = cookie.split('=')[1];
        // this.cookies[name] = value;
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
}
