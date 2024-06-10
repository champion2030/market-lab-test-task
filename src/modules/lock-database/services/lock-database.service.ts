import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { LocksModel } from '../models/lock.schema';
import { Types } from "mongoose";
@Injectable()
export class LockDatabaseService {
  constructor(
    @InjectModel(LocksModel.modelName)
    private readonly locksModel: ReturnModelType<typeof LocksModel>,
  ) {}

  public async createLock(id: string): Promise<{ error: boolean, lockId?: Types.ObjectId }> {
    try {
      const lock = await this.locksModel.create({ lockKey: id });

      return { error: false, lockId: lock._id }
    } catch (e) {
      return { error: true }
    }
  }

  public async unlock(id: Types.ObjectId): Promise<{ error: boolean }> {
    try {
      await this.locksModel.deleteOne({ lockKey: id });

      return { error: false }
    } catch (e) {
      return { error: true }
    }
  }
}
