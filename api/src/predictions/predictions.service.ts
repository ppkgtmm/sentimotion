import { Injectable } from '@nestjs/common';
import { Emotion, Polarity, TimeRange } from '../shared';
import { Model } from 'mongoose';
import { Predictions, PredictionDocument } from '../schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PredictionsService {
  constructor(
    @InjectModel(Predictions.name)
    private readonly predictionModel: Model<PredictionDocument>,
  ) {}

  static getTimeRangeQuery(start: Date, end: Date) {
    return { $match: { created: { $gte: start, $lte: end } } };
  }

  static getAggregateQuery() {
    const query = { total: { $sum: 1 } };
    Object.values(Polarity).forEach((polarity) => {
      query[polarity] = {
        $sum: { $cond: [{ $eq: ['$polarity', polarity] }, 1, 0] },
      };
    });
    Object.values(Emotion).forEach((emotion) => {
      query[emotion] = {
        $sum: { $cond: [{ $eq: ['$emotion', emotion] }, 1, 0] },
      };
    });
    query['date'] = {
      $min: {
        $dateToString: {
          format: '%Y-%m-%d',
          date: '$created',
          timezone: '+07:00',
        },
      },
    };
    return query;
  }

  static getGroupbyDaysQuery() {
    const dateConverterQuery = { date: '$created', timezone: '+07:00' };
    return {
      _id: {
        week: { $week: dateConverterQuery },
        day: { $dayOfWeek: dateConverterQuery },
      },
    };
  }

  static getGroupbyWeeksQuery() {
    const dateConverterQuery = { date: '$created', timezone: '+07:00' };
    return {
      _id: {
        month: { $month: dateConverterQuery },
        week: { $week: dateConverterQuery },
      },
    };
  }

  static getGroupbyMonthsQuery() {
    const dateConverterQuery = { date: '$created', timezone: '+07:00' };
    return {
      _id: {
        year: { $year: dateConverterQuery },
        month: { $month: dateConverterQuery },
      },
    };
  }

  async getLastWeekPredictions() {
    const now = Date.now();
    const start = new Date(now - 1000 * 60 * 60 * 24 * 7);
    return await this.predictionModel
      .aggregate([
        PredictionsService.getTimeRangeQuery(start, new Date(now)),
        {
          $group: {
            ...PredictionsService.getGroupbyDaysQuery(),
            ...PredictionsService.getAggregateQuery(),
          },
        },
        { $sort: { _id: 1 } },
      ])
      .exec();
  }

  async getLastMonthPredictions() {
    const now = new Date(Date.now());
    let start = new Date(now);
    start.setMonth(start.getMonth() - 1);
    if (start.getMonth() === now.getMonth()) {
      start = now;
      start.setDate(0);
    }
    return await this.predictionModel
      .aggregate([
        PredictionsService.getTimeRangeQuery(start, now),
        {
          $group: {
            ...PredictionsService.getGroupbyWeeksQuery(),
            ...PredictionsService.getAggregateQuery(),
          },
        },
        { $sort: { _id: 1 } },
      ])
      .exec();
  }

  async getLastNMonthPredictions(n: number, allTime = false) {
    const query = [
      {
        $group: {
          ...PredictionsService.getGroupbyMonthsQuery(),
          ...PredictionsService.getAggregateQuery(),
        },
      },
      { $sort: { _id: 1 } },
    ];
    if (allTime) return await this.predictionModel.aggregate(query).exec();
    const now = new Date(Date.now());
    const start = new Date(now);
    const monthDiff = start.getMonth() - n;
    start.setMonth(monthDiff);
    if (
      (monthDiff <= 0 && start.getMonth() === 12 + monthDiff + 1) ||
      (monthDiff > 0 && start.getMonth() == monthDiff + 1)
    )
      start.setDate(0);
    return await this.predictionModel
      .aggregate([PredictionsService.getTimeRangeQuery(start, now), ...query])
      .exec();
  }

  async getPredictions(timeRange: TimeRange) {
    if (timeRange === TimeRange.LAST_WEEK) {
      return await this.getLastWeekPredictions();
    } else if (timeRange === TimeRange.LAST_MONTH) {
      return await this.getLastMonthPredictions();
    } else if (timeRange === TimeRange.LAST_3MONTH) {
      return await this.getLastNMonthPredictions(3);
    } else if (timeRange === TimeRange.LAST_6MONTH) {
      return await this.getLastNMonthPredictions(6);
    } else if (timeRange === TimeRange.LAST_YEAR) {
      return await this.getLastNMonthPredictions(12);
    } else {
      return await this.getLastNMonthPredictions(12, true);
    }
  }
}
