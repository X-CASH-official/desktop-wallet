import { AdvNotificationModule } from './adv-notification.module';

describe('AdvNotificationModule', () => {
  let advNotificationModule: AdvNotificationModule;

  beforeEach(() => {
    advNotificationModule = new AdvNotificationModule();
  });

  it('should create an instance', () => {
    expect(advNotificationModule).toBeTruthy();
  });
});
