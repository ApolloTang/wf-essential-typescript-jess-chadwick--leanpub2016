namespace TodoApp.Model {
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace TodoApp.Model {// <--- same TodoApp.Model but declared separately
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}


namespace TodoApp.DataAccess {  // <--- this is not TodoApp.Model

  import Todo = TodoApp.Model.Todo;
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  export interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
  }
}

// the "ITodoService" in the "TodoApp.DataAccess" namespace is trying
// to refer to the "Todo" type in the "TodoApp.Model" namespace.
// which is not exists.
//
// It is not exist because it is in its own namespace "TodoApp.Model"
//
// To fix this we have to refer to it by it’s fully-qualified
// name, including the namespace.
//
// Alternatively, I can create an alias for the namespace or the
// type by using the "import" statement in my namespace declaration
// to import a type from another namespace
//
