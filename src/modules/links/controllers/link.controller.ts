import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LinkService } from '../services/link.service';
import { CreateLinkDto } from '../dto/create-link.dto';
import { Link } from '../interfaces/link.interface';

@Controller()
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('/create-link')
  async generateLink(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linkService.generateLink(createLinkDto);
  }

  @Get(':id')
  async getValueByLink(@Param('id') id: string): Promise<string> {
    return this.linkService.getValueByLink(id);
  }
}
