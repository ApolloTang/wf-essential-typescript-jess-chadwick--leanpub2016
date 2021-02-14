// Page 126
// As soon as type put these types into their own namespace declarations
// - TypeScript begins to warn me that it doesn’t know about the
// Todo type in the ITodoService interface definition.
//

namespace TodoApp.Model {
  // To fix this, you need to expose them using the "export" keyword
  // in order to use types outside of the scope that you define them in.
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace TodoApp.Model {
  interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}




