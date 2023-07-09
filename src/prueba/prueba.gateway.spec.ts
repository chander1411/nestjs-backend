import { Test, TestingModule } from '@nestjs/testing';
import { PruebaGateway } from './prueba.gateway';
import { PruebaService } from './prueba.service';

describe('PruebaGateway', () => {
  let gateway: PruebaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruebaGateway, PruebaService],
    }).compile();

    gateway = module.get<PruebaGateway>(PruebaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
