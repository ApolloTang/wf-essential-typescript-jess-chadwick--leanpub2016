namespace TodoApp.DataAccess {
  import Todo = TodoApp.Model.Todo;

  export interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
  }
}

