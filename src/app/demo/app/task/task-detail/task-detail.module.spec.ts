import { TaskDetailModule } from './task-detail.module';

describe('TaskDetailModule', () => {
  let taskDetailModule: TaskDetailModule;

  beforeEach(() => {
    taskDetailModule = new TaskDetailModule();
  });

  it('should create an instance', () => {
    expect(taskDetailModule).toBeTruthy();
  });
});
