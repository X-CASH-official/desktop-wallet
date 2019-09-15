import { basic_wallet_functionsModule } from './basic_wallet_functions.module';

describe('basic_wallet_functionsModule', () => {
  let basic_wallet_functionsModule: basic_wallet_functionsModule;

  beforeEach(() => {
    basic_wallet_functionsModule = new basic_wallet_functionsModule();
  });

  it('should create an instance', () => {
    expect(basic_wallet_functionsModule).toBeTruthy();
  });
});
