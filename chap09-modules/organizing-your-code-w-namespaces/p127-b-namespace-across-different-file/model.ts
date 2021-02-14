namespace TodoApp.Model {// <--- same TodoApp.Model but declared separately
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}

