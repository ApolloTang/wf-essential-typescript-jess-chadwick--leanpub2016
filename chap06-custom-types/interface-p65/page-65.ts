interface Todo {
  name: string;
  completed: boolean;
}

const todo: Todo = {}
    //^^^^
    // [tsserver 2739] [E] Type '{}' is missing the following properties from type
    //  'Todo': name, completed

