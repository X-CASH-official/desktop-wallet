import { SubscribeModule } from './subscribe.module';

describe('SubscribeModule', () => {
  let subscribeModule: SubscribeModule;

  beforeEach(() => {
    subscribeModule = new SubscribeModule();
  });

  it('should create an instance', () => {
    expect(subscribeModule).toBeTruthy();
  });
});
