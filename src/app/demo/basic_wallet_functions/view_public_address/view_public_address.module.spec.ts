import { view_public_addressModule } from './view_public_address.module';

describe('view_public_addressModule', () => {
  let view_public_addressModule: view_public_addressModule;

  beforeEach(() => {
    view_public_addressModule = new view_public_addressModule();
  });

  it('should create an instance', () => {
    expect(view_public_addressModule).toBeTruthy();
  });
});
