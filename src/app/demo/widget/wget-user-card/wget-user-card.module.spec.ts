import { WgetUserCardModule } from './wget-user-card.module';

describe('WgetUserCardModule', () => {
  let wgetUserCardModule: WgetUserCardModule;

  beforeEach(() => {
    wgetUserCardModule = new WgetUserCardModule();
  });

  it('should create an instance', () => {
    expect(wgetUserCardModule).toBeTruthy();
  });
});
