import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Emotion, Polarity } from '../shared/enums';

export type PredictionDocument = Prediction & Document;

@Schema()
export class Prediction {
  @Prop({ required: true, type: Types.ObjectId })
  space_id: string;

  @Prop({ required: true, type: Types.ObjectId })
  message_id: string;

  @Prop({ required: true })
  polarity: Polarity;

  @Prop({ required: true })
  emotion: Emotion;
}

export const PredictionSchema = SchemaFactory.createForClass(Prediction);
