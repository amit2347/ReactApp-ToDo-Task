import React, { useState, useEffect } from "react";
import InputForm from "./components/inputForm";
import CustomHeader from "./components/CustomHeader";
import SimpleList from "./components/SimpleList";
import "./App.css";
function App() {
  //to accept the input and store it into input state from the input field
  const [input, setInput] = useState("");
  //to append items to todos array
  const [todos, setTodos] = useState([]);
  //to check the isComplete state of each item and rerender the list
  const [checked, setChecked] = useState("");

  // useEffect function is specified to run only when checked state is changed
  useEffect(() => {
    //To sort the todos state array according to requirements given
    const SortedToDos = [...todos].sort((a, b) => {
      //1st Criteria : To sort the undone tasks in a desceding order
      if (a.isComplete === false && b.isComplete === false) {
        if (a.id < b.id) return 1;
        else if (a.id > b.id) return -1;
      }
      //2nd Criteria : To sort undone items first and done items later 
      else if (a.isComplete === false && b.isComplete === true) {
        return -1;
      } 
      //3rd CriteriaL To sort done items in descending order
      else if (a.isComplete === true && b.isComplete === true) {
        if (a.id > b.id) return 1;
        else return -1;
      }
      //final return 1 as the arrow function should return something
      return 1;
    });
    setTodos(SortedToDos);
  }, [checked]);

  return (
    <div className="App">
      {/* Jumbotron Created Using Bootstrap  */}
      <CustomHeader/>
      <InputForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <SimpleList
        todos={todos}
        setTodos={setTodos}
        checked={checked}
        setChecked={setChecked}
      ></SimpleList>
    </div>
  );
}

export default App;
