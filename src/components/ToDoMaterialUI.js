import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const ToDoMaterialUI = ({
  text,
  todo,
  todos,
  setTodos,
  checked,
  setChecked,
}) => {
  const completeHandler = (e) => {
    setTodos(
      Object.values(todos).map((item) => {
        if (item.id === todo.id) {
          setChecked(!checked);

          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }

        return item;
      })
    );
  };
  const deleteHandler = () => {
    //if the id matches the selected item's id , it is filtered out
    setTodos(Object.values(todos).filter((el) => el.id !== todo.id));
  };

  return (
      
    <ListItem mx="auto" className={"wrapper-listItem"} button>
      <Checkbox
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
        onChange={completeHandler}
      />
      <ListItemText
        primary={text}
        className={`${todo.isComplete ? "completed" : ""}`}
      />
      <DeleteIcon onClick={deleteHandler} />
    </ListItem>
    
  );
};
export default ToDoMaterialUI;
