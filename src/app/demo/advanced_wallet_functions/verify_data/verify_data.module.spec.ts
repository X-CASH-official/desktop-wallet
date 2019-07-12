import { verify_dataModule } from './verify_data.module';

describe('verify_dataModule', () => {
  let verify_dataModule: verify_dataModule;

  beforeEach(() => {
    verify_dataModule = new verify_dataModule();
  });

  it('should create an instance', () => {
    expect(verify_dataModule).toBeTruthy();
  });
});
