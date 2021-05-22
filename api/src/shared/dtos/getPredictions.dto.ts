import { TimeRange } from '../enums';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class GetPredictionsDto {
  @IsEnum(TimeRange, {
    message: `should be one of ${Object.values(TimeRange).join(', ')}`,
  })
  @IsNotEmpty()
  readonly time_range: string;
}
