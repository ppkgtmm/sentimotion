import { Module } from '@nestjs/common';
import { PredictionsController } from './predictions.controller';
import { PredictionsService } from './predictions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Predictions, PredictionSchema } from '../schemas/predictions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Predictions.name, schema: PredictionSchema },
    ]),
  ],
  controllers: [PredictionsController],
  providers: [PredictionsService],
})
export class PredictionsModule {}
