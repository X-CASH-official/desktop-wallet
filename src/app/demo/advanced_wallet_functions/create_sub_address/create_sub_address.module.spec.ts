import { create_sub_addressModule } from './create_sub_address.module';

describe('create_sub_addressModule', () => {
  let create_sub_addressModule: create_sub_addressModule;

  beforeEach(() => {
    create_sub_addressModule = new create_sub_addressModule();
  });

  it('should create an instance', () => {
    expect(create_sub_addressModule).toBeTruthy();
  });
});
