import { sendModule } from './send.module';

describe('sendModule', () => {
  let sendModule: sendModule;

  beforeEach(() => {
    sendModule = new sendModule();
  });

  it('should create an instance', () => {
    expect(sendModule).toBeTruthy();
  });
});
