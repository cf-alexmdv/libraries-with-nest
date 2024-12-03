import { Test, TestingModule } from '@nestjs/testing';
import { RequestDecoratorService } from './request-decorator.service';

describe('RequestDecoratorService', () => {
  let service: RequestDecoratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestDecoratorService],
    }).compile();

    service = module.get<RequestDecoratorService>(RequestDecoratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
