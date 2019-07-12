import { AuthMapFormModule } from './auth-map-form.module';

describe('AuthMapFormModule', () => {
  let authMapFormModule: AuthMapFormModule;

  beforeEach(() => {
    authMapFormModule = new AuthMapFormModule();
  });

  it('should create an instance', () => {
    expect(authMapFormModule).toBeTruthy();
  });
});
