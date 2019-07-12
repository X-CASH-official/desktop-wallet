import { AdvModalModule } from './adv-modal.module';

describe('AdvModalModule', () => {
  let advModalModule: AdvModalModule;

  beforeEach(() => {
    advModalModule = new AdvModalModule();
  });

  it('should create an instance', () => {
    expect(advModalModule).toBeTruthy();
  });
});
