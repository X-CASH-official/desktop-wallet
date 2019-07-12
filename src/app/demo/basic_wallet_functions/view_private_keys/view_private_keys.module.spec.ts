import { view_private_keysModule } from './view_private_keys.module';

describe('view_private_keysModule', () => {
  let view_private_keysModule: view_private_keysModule;

  beforeEach(() => {
    view_private_keysModule = new view_private_keysModule();
  });

  it('should create an instance', () => {
    expect(view_private_keysModule).toBeTruthy();
  });
});
