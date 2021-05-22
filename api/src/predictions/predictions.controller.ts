import { Controller, Get, Param } from '@nestjs/common';
import { GetPredictionsDto } from '../shared/dtos/getPredictions.dto';

@Controller('predictions')
export class PredictionsController {
  @Get(':time_range')
  getPredictions(@Param() params: GetPredictionsDto) {
    return 'Hello';
  }
}
