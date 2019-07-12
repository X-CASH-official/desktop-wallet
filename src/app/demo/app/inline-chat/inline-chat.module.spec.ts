import { InlineChatModule } from './inline-chat.module';

describe('InlineChatModule', () => {
  let inlineChatModule: InlineChatModule;

  beforeEach(() => {
    inlineChatModule = new InlineChatModule();
  });

  it('should create an instance', () => {
    expect(inlineChatModule).toBeTruthy();
  });
});
