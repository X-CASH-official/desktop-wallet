import { TodoListModule } from './todo-list.module';

describe('TodoListModule', () => {
  let todoListModule: TodoListModule;

  beforeEach(() => {
    todoListModule = new TodoListModule();
  });

  it('should create an instance', () => {
    expect(todoListModule).toBeTruthy();
  });
});
