import { DashProjectModule } from './dash-project.module';

describe('DashProjectModule', () => {
  let dashProjectModule: DashProjectModule;

  beforeEach(() => {
    dashProjectModule = new DashProjectModule();
  });

  it('should create an instance', () => {
    expect(dashProjectModule).toBeTruthy();
  });
});
