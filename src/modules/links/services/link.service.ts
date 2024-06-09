import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLinkDto } from '../dto/create-link.dto';
import { Link } from '../interfaces/link.interface';
import { LinksDatabaseService } from '../../links-database/services/links-database.service';
import { appHost, appPort } from '../../../config';

@Injectable()
export class LinkService {
  constructor(private readonly linksDatabaseService: LinksDatabaseService) {}
  public async generateLink(createLinkDto: CreateLinkDto): Promise<Link> {
    const linkId = await this.linksDatabaseService.createLink(
      createLinkDto.text,
    );

    return {
      link: `http://${appHost}:${appPort}/${linkId}`,
    };
  }

  public async getValueByLink(id: string): Promise<string> {
    const link = await this.linksDatabaseService.getLinkById(id);

    if (!link.isActive) {
      throw new BadRequestException('Эта ссылка больше не активна');
    }

    await this.linksDatabaseService.disableLink(id);

    return link.text;
  }
}
