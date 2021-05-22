import { Injectable } from '@nestjs/common';
import { TimeRange } from '../shared/enums';

@Injectable()
export class PredictionsService {
  async getPredictions(timeRange: TimeRange) {
    switch (timeRange) {
      case TimeRange.LAST_WEEK:
        break;
      case TimeRange.LAST_MONTH:
        break;
      case TimeRange.LAST_3MONTH:
        break;
      case TimeRange.LAST_6MONTH:
        break;
      case TimeRange.LAST_YEAR:
        break;
    }
  }
}
