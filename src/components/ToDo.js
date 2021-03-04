import React from 'react'

 const ToDo = ({text ,todo, todos , setTodos}) => {
    const deleteHandler = () => {
        setTodos(Object.values(todos).filter((el)=> 
            el.id !== todo.id
        ));
        setTodos();
        
    }
    const completeHandler = (e) =>{
        setTodos(Object.values(todos).map((item) => {
            
            if(item.id === todo.id){
                
                return{
                    ...item, isComplete : !item.isComplete ,
                    
                }
            }
            
            return item;
            
        }))
        
       // updateFunction(todos);
       
    }
    return(
        <div >
            
            <li className={`${todo.isComplete ? "completed" : ""}`}>{text}</li>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={completeHandler}>Update</button>
        </div>
        )
        
            
        
    
        
 }
 export default ToDo