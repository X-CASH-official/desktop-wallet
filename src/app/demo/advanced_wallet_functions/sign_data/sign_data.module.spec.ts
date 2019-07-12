import { sign_dataModule } from './sign_data.module';

describe('sign_dataModule', () => {
  let sign_dataModule: sign_dataModule;

  beforeEach(() => {
    sign_dataModule = new sign_dataModule();
  });

  it('should create an instance', () => {
    expect(sign_dataModule).toBeTruthy();
  });
});
