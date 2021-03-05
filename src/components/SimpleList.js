import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ToDoMaterialUI from "./ToDoMaterialUI";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SimpleList = ({
  todos,
  setTodos,
  checked,
  setChecked,
  refreshChanges,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {todos.map((todo) => (
        <List
          key={todo.id}
          component="nav"
          aria-label="secondary mailbox folders"
        >
          <ToDoMaterialUI
            className={"container-list"}
            todo={todo}
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            checked={checked}
            setChecked={setChecked}
          ></ToDoMaterialUI>
        </List>
      ))}
    </div>
  );
};
export default SimpleList;
