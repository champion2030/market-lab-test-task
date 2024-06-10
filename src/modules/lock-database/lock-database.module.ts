import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LockDatabaseService } from './services/lock-database.service';
import { LocksModel } from './models/lock.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LocksModel.modelName,
        schema: LocksModel.schema,
      },
    ]),
  ],
  providers: [LockDatabaseService],
  exports: [LockDatabaseService],
})
export class LockDatabaseModule {}
