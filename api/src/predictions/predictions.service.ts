import { Injectable } from '@nestjs/common';
import { TimeRange } from '../shared/enums';
import { Model } from 'mongoose';
import { PredictionDocument } from '../schemas/predictions.schema';

@Injectable()
export class PredictionsService {
  constructor(private readonly predictionModel: Model<PredictionDocument>) {}
  async getPredictions(timeRange: TimeRange) {
    if (timeRange === TimeRange.LAST_WEEK) {
      // group by day of week
    } else if (timeRange === TimeRange.LAST_MONTH) {
      // group by week
    } else {
      // group by month
    }
  }
}
