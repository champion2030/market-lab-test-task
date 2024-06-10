import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    collection: 'locks',
  },
})
export class Locks {

  @prop({
    required: true,
    type: String,
    unique: true,
  })
  lockKey: string;

  @prop({
    expires: 60,
    default: new Date(),
  })
  createdAt: Date;
}

export const LocksModel = getModelForClass(Locks);
