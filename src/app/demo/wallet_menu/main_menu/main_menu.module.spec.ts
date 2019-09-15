import { main_menuModule } from './main_menu.module';

describe('main_menuModule', () => {
  let main_menuModule: main_menuModule;

  beforeEach(() => {
    main_menuModule = new main_menuModule();
  });

  it('should create an instance', () => {
    expect(main_menuModule).toBeTruthy();
  });
});
