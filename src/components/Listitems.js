import React from 'react';
import ToDo from './ToDo'
const Listitems = ({ todos, setTodos ,updateList  ,updateFunction}) =>{
 
  
 
    
       // var  listOfItems = [{"name":"Amit" , "id":Math.random()*10000, "isComplete" : false},{"name":"test2" ,"id" : Math.random()*10000, 
        //"isComplete":false}];
        //const  listItems = todo.map((d) => <li key={d.id}>{d.name}</li> )
        return(
            <div>
                {todos.map( todo => (
                   
                   <ToDo 
                   updateFunction={updateFunction} 
                   todo={todo} 
                   text={todo.text}  
                   key={todo.id} todos={todos} setTodos={setTodos} updateList={updateList}></ToDo>  
                 ))}
            </div>
        )



}
    
    
       

export default Listitems