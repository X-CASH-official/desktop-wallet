import { TaskBoardModule } from './task-board.module';

describe('TaskBoardModule', () => {
  let taskBoardModule: TaskBoardModule;

  beforeEach(() => {
    taskBoardModule = new TaskBoardModule();
  });

  it('should create an instance', () => {
    expect(taskBoardModule).toBeTruthy();
  });
});
