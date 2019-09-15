import { create_integrated_addressModule } from './create_integrated_address.module';

describe('create_integrated_addressModule', () => {
  let create_integrated_addressModule: create_integrated_addressModule;

  beforeEach(() => {
    create_integrated_addressModule = new create_integrated_addressModule();
  });

  it('should create an instance', () => {
    expect(create_integrated_addressModule).toBeTruthy();
  });
});
