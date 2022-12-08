import { Injectable } from '@nestjs/common';
import { readPackageInfo } from './utils';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    let results = [];
    try {
      results = await readPackageInfo();
      console.log(results);
    } catch (err) {
      console.error(err);
    }
    return JSON.stringify(results);
  }
}
