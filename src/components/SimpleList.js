import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from "@material-ui/core/ListItemText";
//import Divider from '@material-ui/core/Divider';
//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
//import DeleteIcon from "@material-ui/icons/Delete";
//import Checkbox from "@material-ui/core/Checkbox";
//import components
import ToDoMaterialUI from "./ToDoMaterialUI";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
}));

const SimpleList = ({ todos, setTodos,checked,setChecked , refreshChanges }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    { todos.map(todo => (
      
      
      <List  key = {todo.id} component="nav" aria-label="secondary mailbox folders">
        
          <ToDoMaterialUI 
            className={ "container-list" }
            todo={todo}
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            checked ={checked}
            setChecked = {setChecked}
           // refreshChanges = {refreshChanges}
          ></ToDoMaterialUI>
        
      </List>
      
    
    
    ))}
    </div>
  );
};
export default SimpleList;
