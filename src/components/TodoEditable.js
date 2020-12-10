import React, { useState, useEffect } from "react";
import { ListItemText, TextField } from "@material-ui/core";

export default function TodoEditable({ todo, boolean }) {
  const [edit, setEdit] = useState(boolean);

  let content = todo.text;
  return (
    <ListItemText onClick={() => setEdit(true)}>
      <div style={{ width: "80%" }}>
        {edit ? (
          <form>
            <TextField value={content}></TextField>
          </form>
        ) : (
          todo.text
        )}
      </div>
    </ListItemText>
  );
}
