import { Test, TestingModule } from '@nestjs/testing';
import { RecolectionsController } from './recolections.controller';
import { RecolectionsService } from './recolections.service';

describe('RecolectionsController', () => {
  let controller: RecolectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecolectionsController],
      providers: [RecolectionsService],
    }).compile();

    controller = module.get<RecolectionsController>(RecolectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
