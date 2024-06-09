import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinksDatabaseService } from './services/links-database.service';
import { LinksModel } from './models/links.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LinksModel.modelName,
        schema: LinksModel.schema,
      },
    ]),
  ],
  providers: [LinksDatabaseService],
  exports: [LinksDatabaseService],
})
export class LinksDatabaseModule {}
