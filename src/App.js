import React, { useState ,useEffect } from 'react'

import InputForm from './components/inputForm'
//import Listitems from './components/Listitems'
import CustomHeader from './components/CustomHeader'
import SimpleList from './components/SimpleList'
import './App.css';
function App() {
  const [input,setInput] = useState('');
  const [todos , setTodos] = useState([]);
  const [checked,setChecked] = useState('');
  
  
  useEffect(()=>{
    
    todos.sort( (a,b) =>  {
      if (a.isComplete === false && b.isComplete === false) {
        if (a.id < b.id) return 1  
        else if ( a.id > b.id) return -1

      }
      
      else if (a.isComplete === false && b.isComplete === true)
      {
        return -1
      }
      else if (a.isComplete === true && b.isComplete === true){
        if( a.id > b.id ) return 1
        else return -1
      }
    });
    
          
  },[todos,input , checked , setChecked]);
   
  
  
  return (
    <div className="App">
      <CustomHeader></CustomHeader>
     <InputForm  
     input={input} 
     setInput ={setInput} 
     todos = {todos} 
     setTodos = {setTodos}
     
     
     />
     {/* <Listitems></Listitems> */}
     <SimpleList
     todos = {todos} 
     setTodos = {setTodos} 
     checked = {checked}
     setChecked = {setChecked}
     
     
     >
       
     </SimpleList>
    </div>
  )
    
    
  
}

export default App;
