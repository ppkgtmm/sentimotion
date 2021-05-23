import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ErrorFilter, exceptionFactory } from '../src/exception';
import exp from 'constants';

describe('prediction API (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        exceptionFactory,
      }),
    );
    app.useGlobalFilters(new ErrorFilter());
    await app.init();
  });

  it('should throw invalid path', () => {
    return request(app.getHttpServer()).get('/api/v1/predictions/').expect(404);
  });

  it('should throw invalid time range', () => {
    return request(app.getHttpServer())
      .get('/api/v1/predictions/mmm')
      .expect(400)
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body.error).toBeDefined();
        expect(body.error.time_range).toBeDefined();
        expect(body.error.time_range).toHaveLength(1);
      });
  });
});
