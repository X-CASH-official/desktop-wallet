import { InvoiceBasicModule } from './invoice-basic.module';

describe('InvoiceBasicModule', () => {
  let invoiceBasicModule: InvoiceBasicModule;

  beforeEach(() => {
    invoiceBasicModule = new InvoiceBasicModule();
  });

  it('should create an instance', () => {
    expect(invoiceBasicModule).toBeTruthy();
  });
});
