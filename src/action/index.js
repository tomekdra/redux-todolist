export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo,
});
export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id,
});
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
export const editTodo = (id, content) => ({
  type: "EDIT_TODO",
  id,
  content,
});
