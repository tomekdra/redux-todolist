import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Card,
  ListItemSecondaryAction,
  TextField,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "../action";
import React, { useState } from "react";
import TodoEditable from "./TodoEditable";

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
    color: "#aaa",
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
  const editItem = (id) => {
    dispatch(editTodo(id));
  };
  let boolean = false;
  return (
    <Card elevation={10} className={classes.cards}>
      <List>
        {todos &&
          todos.map((item, index) => {
            return (
              <ListItem
                divider
                key={`todo-${index}`}
                className={classes.hover}
                // onClick={() => toggle(index)}
              >
                <TodoEditable todo={item} boolean={boolean} />

                <ListItemSecondaryAction>
                  <IconButton onClick={() => deleteTodo(index)}>
                    <Delete color="secondary" />
                  </IconButton>
                  <IconButton onClick={() => (boolean = true)}>
                    <Edit color="primary" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    </Card>
  );
}
