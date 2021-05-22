import { Controller, Get, Param } from '@nestjs/common';
import { GetPredictionsDto } from '../shared/dtos/getPredictions.dto';
import { PredictionsService } from './predictions.service';

@Controller('predictions')
export class PredictionsController {
  constructor(private predictionService: PredictionsService) {}

  @Get(':time_range')
  async getPredictions(@Param() params: GetPredictionsDto) {
    return await this.predictionService.getPredictions(params.time_range);
  }
}
