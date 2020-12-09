const initialState = {
  todos: [
    { text: "lorem ipsum", isDone: false },
    { text: "bla bla bla lorem ipsum", isDone: false },
  ],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [{ text: action.todo, isDone: false }, ...state.todos],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item, index) => index !== action.id),
      };
    case "TOGGLE_TODO":
      console.log("toggle");
      return {
        ...state,
        todos: state.todos.map((item, index) =>
          action.id === index ? { ...item, isDone: !item.isDone } : item
        ),
      };
    default:
      return state;
  }
};
