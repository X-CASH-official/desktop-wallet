import { AdvTaskBoardModule } from './adv-task-board.module';

describe('AdvTaskBoardModule', () => {
  let advTaskBoardModule: AdvTaskBoardModule;

  beforeEach(() => {
    advTaskBoardModule = new AdvTaskBoardModule();
  });

  it('should create an instance', () => {
    expect(advTaskBoardModule).toBeTruthy();
  });
});
