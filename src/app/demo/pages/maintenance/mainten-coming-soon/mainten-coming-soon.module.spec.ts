import { MaintenComingSoonModule } from './mainten-coming-soon.module';

describe('MaintenComingSoonModule', () => {
  let maintenComingSoonModule: MaintenComingSoonModule;

  beforeEach(() => {
    maintenComingSoonModule = new MaintenComingSoonModule();
  });

  it('should create an instance', () => {
    expect(maintenComingSoonModule).toBeTruthy();
  });
});
