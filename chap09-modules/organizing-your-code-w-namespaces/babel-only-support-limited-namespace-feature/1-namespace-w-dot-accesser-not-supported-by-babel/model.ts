namespace TodoApp.Model {
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace TodoApp.Model {
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}


namespace TodoApp.DataAccess {
  export interface ITodoService {
    add(todo: TodoApp.Model.Todo): TodoApp.Model.Todo;
    delete(todoId: number): void;
    getAll(): TodoApp.Model.Todo[];
    getById(todoId: number): TodoApp.Model.Todo;
  }
}

//
// TodoApp.DataAccess
//        ^
//        |
// babel can not transpile Namespace with dot accesser
//
//$ yarn c model-doesnot-work.ts
//yarn run v1.22.10
//$ babel model-doesnot-work.ts
//TypeError: /Users/apollotang/1/1-a/10-web/lang-ts/books/essential-typescript-jess-chadwick--leanpub2016/wf-essential-typescript-jess-chadwick--leanpub2016/chap09-modules/organizing-your-code-w-namespaces/babel-w-namespace/this-doesnot-work/model-doesnot-work.ts: @babel/template placeholder "$1": Property expression of ExpressionStatement expected node to be of a type ["Expression"] but instead got "TSModuleBlock"
//
