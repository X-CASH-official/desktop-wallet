import { WidgetModule } from './widget.module';

describe('WidgetModule', () => {
  let widgetModule: WidgetModule;

  beforeEach(() => {
    widgetModule = new WidgetModule();
  });

  it('should create an instance', () => {
    expect(widgetModule).toBeTruthy();
  });
});
