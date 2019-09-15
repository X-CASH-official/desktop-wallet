import { address_bookModule } from './address_book.module';

describe('address_bookModule', () => {
  let address_bookModule: address_bookModule;

  beforeEach(() => {
    address_bookModule = new address_bookModule();
  });

  it('should create an instance', () => {
    expect(address_bookModule).toBeTruthy();
  });
});
