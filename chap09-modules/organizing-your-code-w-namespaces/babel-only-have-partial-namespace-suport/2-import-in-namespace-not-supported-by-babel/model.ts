namespace Model {
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace Model {
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}


namespace DataAccess {

  import Todo = Model.Todo;
  //^^^^^^^^^^^^^^^^^^^^^^^
  //import in namespace not supported in babel

  export interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
  }
}


// $ yarn c model.ts
// yarn run v1.22.10
// $ babel model.ts
// SyntaxError: /Users/apollotang/1/1-a/10-web/lang-ts/books/essential-typescript-jess-chadwick--leanpub2016/wf-essential-typescript-jess-chadwick--leanpub2016/chap09-modules/organizing-your-code-w-namespaces/babel-w-namespace/2-import-in-namespace-not-supported-by-babel/model.ts: `import =` is not supported by @babel/plugin-transform-typescript
// Please consider using `import <moduleName> from '<moduleName>';` alongside Typescript's --allowSyntheticDefaultImports option.
//   19 | namespace DataAccess {
//   20 |
// > 21 |   import Todo = Model.Todo;
//      |   ^^^^^^^^^^^^^^^^^^^^^^^^^
//   22 |   //^^^^^^^^^^^^^^^^^^^^^^^
//   23 |   //import in namespace not support in babel
//   24 |
