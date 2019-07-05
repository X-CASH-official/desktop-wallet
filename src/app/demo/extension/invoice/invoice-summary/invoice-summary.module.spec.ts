import { InvoiceSummaryModule } from './invoice-summary.module';

describe('InvoiceSummaryModule', () => {
  let invoiceSummaryModule: InvoiceSummaryModule;

  beforeEach(() => {
    invoiceSummaryModule = new InvoiceSummaryModule();
  });

  it('should create an instance', () => {
    expect(invoiceSummaryModule).toBeTruthy();
  });
});
