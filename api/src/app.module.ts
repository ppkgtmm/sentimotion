import { Module } from '@nestjs/common';
import { PredictionsModule } from './predictions/predictions.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, { useFindAndModify: false }),
    PredictionsModule,
  ],
})
export class AppModule {}
