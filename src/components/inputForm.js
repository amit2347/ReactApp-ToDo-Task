import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const InputForm = ({ setInput, input, todos, setTodos }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setOpen(true);
    } else {
      setTodos([
        {
          text: input,
          id: Date.now(),
          isComplete: false,
          style: { textDecoration: todos.isComplete ? "line-through" : "none" },
        },
        ...todos,
      ]);
    }

    setInput("");
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Enter the task"
          inputProps={{ "aria-label": "description" }}
          value={input}
          type="text"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          value="Submit"
        >
          Submit
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Empty Field !
        </Alert>
      </Snackbar>
    </>
  );
};
export default InputForm;
