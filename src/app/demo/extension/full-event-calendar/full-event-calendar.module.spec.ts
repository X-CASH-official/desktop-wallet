import { FullEventCalendarModule } from './full-event-calendar.module';

describe('FullEventCalendarModule', () => {
  let fullEventCalendarModule: FullEventCalendarModule;

  beforeEach(() => {
    fullEventCalendarModule = new FullEventCalendarModule();
  });

  it('should create an instance', () => {
    expect(fullEventCalendarModule).toBeTruthy();
  });
});
