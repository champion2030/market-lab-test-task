import { Module } from '@nestjs/common';
import { LinksDatabaseModule } from '../links-database/links-database.module';
import { LinkController } from './controllers/link.controller';
import { LinkService } from './services/link.service';

@Module({
  imports: [LinksDatabaseModule],
  controllers: [LinkController],
  providers: [LinkController, LinkService],
})
export class LinksModule {}
