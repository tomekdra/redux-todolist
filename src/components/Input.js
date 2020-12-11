import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Card } from "@material-ui/core";
import { addTodo } from "../action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  cards: {
    padding: 10,
    margin: 10,
  },
  insideMargin: {
    margin: 10,
  },
  hover: {
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
});
export default function Input() {
  const input = React.createRef();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value < 3) {
      console.log("error"); // todo, show error message
      return;
    } else {
      dispatch(addTodo(input.current.value));
      input.current.value = "";
    }
  };

  return (
    <Card elevation={10} className={classes.cards}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="What to do"
          color="primary"
          inputRef={input}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          className={classes.insideMargin}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </form>
    </Card>
  );
}
