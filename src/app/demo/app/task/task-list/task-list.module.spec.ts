import { TaskListModule } from './task-list.module';

describe('TaskListModule', () => {
  let taskListModule: TaskListModule;

  beforeEach(() => {
    taskListModule = new TaskListModule();
  });

  it('should create an instance', () => {
    expect(taskListModule).toBeTruthy();
  });
});
