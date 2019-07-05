import { AdvRatingModule } from './adv-rating.module';

describe('AdvRatingModule', () => {
  let advRatingModule: AdvRatingModule;

  beforeEach(() => {
    advRatingModule = new AdvRatingModule();
  });

  it('should create an instance', () => {
    expect(advRatingModule).toBeTruthy();
  });
});
