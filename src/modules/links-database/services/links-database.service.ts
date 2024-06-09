import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { LinksModel } from '../models/links.schema';
import { Types } from 'mongoose';

@Injectable()
export class LinksDatabaseService {
  constructor(
    @InjectModel(LinksModel.modelName)
    private readonly linksModel: ReturnModelType<typeof LinksModel>,
  ) {}

  public async createLink(text: string): Promise<Types.ObjectId> {
    const createdLink = await this.linksModel.create({ text });

    return createdLink._id;
  }

  public async getLinkById(
    id: string,
  ): Promise<{ text: string; isActive: boolean }> {
    const link = await this.linksModel.findOne({ _id: id });

    if (!link) {
      throw new NotFoundException('Извините, такой ссылки не существует');
    }

    return {
      text: link.text,
      isActive: link.isActive,
    };
  }

  public async disableLink(id: string): Promise<void> {
    await this.linksModel.updateOne({ _id: id }, { isActive: false });
  }
}
