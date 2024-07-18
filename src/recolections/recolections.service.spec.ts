import { Test, TestingModule } from '@nestjs/testing';
import { RecolectionsService } from './recolections.service';

describe('RecolectionsService', () => {
  let service: RecolectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecolectionsService],
    }).compile();

    service = module.get<RecolectionsService>(RecolectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
