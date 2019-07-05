import { InvoiceListModule } from './invoice-list.module';

describe('InvoiceListModule', () => {
  let invoiceListModule: InvoiceListModule;

  beforeEach(() => {
    invoiceListModule = new InvoiceListModule();
  });

  it('should create an instance', () => {
    expect(invoiceListModule).toBeTruthy();
  });
});
