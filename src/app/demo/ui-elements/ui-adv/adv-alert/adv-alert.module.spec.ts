import { AdvAlertModule } from './adv-alert.module';

describe('AdvAlertModule', () => {
  let advAlertModule: AdvAlertModule;

  beforeEach(() => {
    advAlertModule = new AdvAlertModule();
  });

  it('should create an instance', () => {
    expect(advAlertModule).toBeTruthy();
  });
});
