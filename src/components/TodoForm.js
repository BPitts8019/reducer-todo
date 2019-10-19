import React, {useState, useContext} from "react";

//context
import TodoListContext from "../contexts/TodoList.js";

function TodoForm () {
   const {dispatch} = useContext(TodoListContext);
   const [taskName, setTaskName] = useState("");

   const handleChange = event => {
      setTaskName(event.target.value);
   };

   const handleClick = event => {
         event.preventDefault();
         
         // check for errors
         if (taskName === "") {
            alert("Please enter a task");
            return;
         }

         //reset the form
         const item = taskName;
         setTaskName("");

         //add new task
         dispatch({
            type: "ADD_TASK", 
            payload: {
               item,
               id: new Date(),
               completed: false
            }
         });
   };

   return (
      <form onSubmit={handleClick}>
         <input 
            type="text" 
            placeholder="...todo" 
            onChange={handleChange} 
            value={taskName} 
         />
         <button type="submit">Add Task</button>
      </form>
   );
}

export default TodoForm;