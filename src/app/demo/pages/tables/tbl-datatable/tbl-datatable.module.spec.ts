import { TblDatatableModule } from './tbl-datatable.module';

describe('TblDatatableModule', () => {
  let tblDatatableModule: TblDatatableModule;

  beforeEach(() => {
    tblDatatableModule = new TblDatatableModule();
  });

  it('should create an instance', () => {
    expect(tblDatatableModule).toBeTruthy();
  });
});
