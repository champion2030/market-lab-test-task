import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import getMongoUrl from './utils/get-mongo-url';
import { LinksModule } from './modules/links/links.module';

@Module({
  imports: [MongooseModule.forRoot(getMongoUrl()), LinksModule],
})
export class MainModule {}
