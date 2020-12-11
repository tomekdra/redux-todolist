import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "../action";

import TodoEditable from "./TodoEditable";

const useStyles = makeStyles({
  cards: {
    padding: 10,
    margin: 10,
  },
  hover: {
    padding: 15,
    "&:hover": {
      backgroundColor: "#ddd",
      cursor: "pointer",
    },
  },
});

export default function TodoList() {
  const classes = useStyles();
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const toggle = (id) => {
    dispatch(toggleTodo(id));
  };
  const edit = (id, content) => {
    dispatch(editTodo(id, content));
  };

  return (
    <Card elevation={10} className={classes.cards}>
      <List>
        {todos &&
          todos.map((item, index) => {
            return (
              <ListItem divider key={`todo-${index}`} className={classes.hover}>
                <TodoEditable
                  todo={item}
                  index={index}
                  deleteTodo={deleteTodo}
                  toggle={toggle}
                  editTodo={edit}
                />
              </ListItem>
            );
          })}
      </List>
    </Card>
  );
}
