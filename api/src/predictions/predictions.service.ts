import { Injectable } from '@nestjs/common';
import { TimeRange } from '../shared/enums';

@Injectable()
export class PredictionsService {
  async getPredictions(timeRange: TimeRange) {
    if (
      timeRange === TimeRange.LAST_WEEK ||
      timeRange === TimeRange.LAST_MONTH
    ) {
    } else {
    }
  }
}
