import { AdvDatepickerModule } from './adv-datepicker.module';

describe('AdvDatepickerModule', () => {
  let advDatepickerModule: AdvDatepickerModule;

  beforeEach(() => {
    advDatepickerModule = new AdvDatepickerModule();
  });

  it('should create an instance', () => {
    expect(advDatepickerModule).toBeTruthy();
  });
});
