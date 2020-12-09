import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Card,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../action";

const useStyles = makeStyles({
  cards: {
    padding: 10,
    margin: 10,
  },
  insideMargin: {
    margin: 10,
  },
  hover: {
    padding: 15,
    "&:hover": {
      backgroundColor: "#ddd",
      cursor: "pointer",
    },
  },
  isDone: {
    textDecorationLine: "line-through",
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

  return (
    <Card elevation={10} className={classes.cards}>
      <List>
        {todos &&
          todos.map((item, index) => {
            return (
              <ListItem divider key={`todo-${index}`}>
                <ListItemText
                  className={classes.hover}
                  onClick={() => toggle(index)}
                >
                  {item.isDone ? (
                    <div className={classes.isDone}> {item.text}</div>
                  ) : (
                    item.text
                  )}
                </ListItemText>
                <IconButton onClick={() => deleteTodo(index)}>
                  <Delete color="secondary" />
                </IconButton>
                <IconButton>
                  <Edit color="primary" />
                </IconButton>
              </ListItem>
            );
          })}
      </List>
    </Card>
  );
}
