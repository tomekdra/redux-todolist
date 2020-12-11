import React, { useState } from "react";
import {
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  isDone: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
});

const TodoEditable = ({ todo, index, deleteTodo, toggle, editTodo }) => {
  const [edit, setEdit] = useState(false);
  const input = React.createRef();
  const classes = useStyle();

  let content = todo.text;

  const handleChange = () => {
    content = input.current.value;
  };

  const submit = (e) => {
    e.preventDefault();
    setEdit(false);
    return editTodo(index, content);
  };

  return (
    <div style={{ width: "80%" }}>
      {edit ? (
        <form onSubmit={submit}>
          <TextField
            inputRef={input}
            label="Edit"
            variant="filled"
            fullWidth
            onChange={handleChange}
            defaultValue={content}
          ></TextField>
          <button type="submit">Save</button>
          <button onClick={() => setEdit(false)}>Abort</button>
        </form>
      ) : (
        <>
          <ListItemText
            onClick={() => toggle(index)}
            className={todo.isDone ? classes.isDone : null}
          >
            {todo.text}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => deleteTodo(index)}>
              <Delete color="secondary" />
            </IconButton>
            <IconButton onClick={() => setEdit(!edit)}>
              <Edit color="primary" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </div>
  );
};

export default TodoEditable;
