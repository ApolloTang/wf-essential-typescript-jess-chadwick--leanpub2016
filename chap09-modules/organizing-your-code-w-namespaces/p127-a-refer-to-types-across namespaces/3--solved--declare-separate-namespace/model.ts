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
  export interface ITodoService {
    add(todo: TodoApp.Model.Todo): TodoApp.Model.Todo;
            //^^^^^^^^^^^^^        ^^^^^^^^^^^^^^
    delete(todoId: number): void;
    getAll(): TodoApp.Model.Todo[];
            //^^^^^^^^^^^^^
    getById(todoId: number): TodoApp.Model.Todo;
                          // ^^^^^^^^^^^^^
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

