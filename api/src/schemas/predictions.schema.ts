import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Emotion, Polarity } from '../shared';

export type PredictionDocument = Predictions & Document;

@Schema()
export class Predictions {
  @Prop({ required: true, type: Types.ObjectId })
  space_id: string;

  @Prop({ required: true, type: Types.ObjectId })
  message_id: string;

  @Prop({ required: true })
  polarity: Polarity;

  @Prop({ required: true })
  emotion: Emotion;

  @Prop({ required: true })
  created: Date;
}

export const PredictionSchema = SchemaFactory.createForClass(Predictions);
