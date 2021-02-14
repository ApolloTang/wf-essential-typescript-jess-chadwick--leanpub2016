namespace TodoApp.Model {
  interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }

  enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}
