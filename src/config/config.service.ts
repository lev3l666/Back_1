import * as fs from 'fs';
import { parse } from 'dotenv';
import { Configuration } from './config.keys';

export class ConfigService {
  private readonly envConfig: { [key: string]: any };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../../.env';
      const existsPath = fs.existsSync(envFilePath);

      if (!existsPath) {
        process.exit(0);
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      this.envConfig = { PORT: Configuration.PORT.toString() };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
