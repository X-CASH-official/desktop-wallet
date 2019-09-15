import { change_passwordModule } from './change_password.module';

describe('change_passwordModule', () => {
  let change_passwordModule: change_passwordModule;

  beforeEach(() => {
    change_passwordModule = new change_passwordModule();
  });

  it('should create an instance', () => {
    expect(change_passwordModule).toBeTruthy();
  });
});
