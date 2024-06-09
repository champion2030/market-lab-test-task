import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const appPort = process.env.APP_PORT || 3000;

export const appHost = process.env.APP_HOST || 'localhost';

export const mongoDbConfig = {
  host: process.env.MONGODB_HOST || 'localhost',
  username: process.env.MONGODB_USERNAME || 'test',
  password: process.env.MONGODB_PASSWORD || 'test',
  database: process.env.MONGODB_DATABASE || 'test',
  port: +process.env.MONGODB_PORT || 27017,
};
