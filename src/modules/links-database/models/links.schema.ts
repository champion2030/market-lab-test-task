import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: 'links',
  },
})
export class Links {
  @prop({
    required: true,
    type: String,
  })
  text: string;

  @prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;
}

export const LinksModel = getModelForClass(Links);
