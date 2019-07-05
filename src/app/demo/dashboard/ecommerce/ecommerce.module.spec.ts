import { EcommerceModule } from './ecommerce.module';

describe('EcommerceModule', () => {
  let ecommerceModule: EcommerceModule;

  beforeEach(() => {
    ecommerceModule = new EcommerceModule();
  });

  it('should create an instance', () => {
    expect(ecommerceModule).toBeTruthy();
  });
});
