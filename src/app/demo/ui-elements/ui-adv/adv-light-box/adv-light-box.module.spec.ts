import { AdvLightBoxModule } from './adv-light-box.module';

describe('AdvLightBoxModule', () => {
  let advLightBoxModule: AdvLightBoxModule;

  beforeEach(() => {
    advLightBoxModule = new AdvLightBoxModule();
  });

  it('should create an instance', () => {
    expect(advLightBoxModule).toBeTruthy();
  });
});
