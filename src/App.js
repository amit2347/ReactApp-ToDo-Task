import React, { useState, useEffect } from "react";
import InputForm from "./components/inputForm";
import CustomHeader from "./components/CustomHeader";
import SimpleList from "./components/SimpleList";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState("");

  useEffect(() => {
    //To sort the todos state array according to requirements given
    console.log("Triggered");
    const SortedToDos = [...todos].sort((a, b) => {
      if (a.isComplete === false && b.isComplete === false) {
        if (a.id < b.id) return 1;
        else if (a.id > b.id) return -1;
      } else if (a.isComplete === false && b.isComplete === true) {
        return -1;
      } else if (a.isComplete === true && b.isComplete === true) {
        if (a.id > b.id) return 1;
        else return -1;
      }
      return 1;
    });
    setTodos(SortedToDos);
  }, [checked]);

  return (
    <div className="App">
      {/* Jumbotron Created Using Bootstrap  */}
      <CustomHeader></CustomHeader>
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
