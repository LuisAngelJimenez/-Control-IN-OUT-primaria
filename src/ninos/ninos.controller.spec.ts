import { Test, TestingModule } from '@nestjs/testing';
import { NinosController } from './ninos.controller';
import { NinosService } from './ninos.service';

describe('NinosController', () => {
  let controller: NinosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NinosController],
      providers: [NinosService],
    }).compile();

    controller = module.get<NinosController>(NinosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
