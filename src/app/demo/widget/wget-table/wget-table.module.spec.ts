import { WgetTableModule } from './wget-table.module';

describe('WgetTableModule', () => {
  let wgetTableModule: WgetTableModule;

  beforeEach(() => {
    wgetTableModule = new WgetTableModule();
  });

  it('should create an instance', () => {
    expect(wgetTableModule).toBeTruthy();
  });
});
