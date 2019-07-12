import { advanced_wallet_functionsModule } from './advanced_wallet_functions.module';

describe('advanced_wallet_functionsModule', () => {
  let advanced_wallet_functionsModule: advanced_wallet_functionsModule;

  beforeEach(() => {
    advanced_wallet_functionsModule = new advanced_wallet_functionsModule();
  });

  it('should create an instance', () => {
    expect(advanced_wallet_functionsModule).toBeTruthy();
  });
});
