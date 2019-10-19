import React, {useState, useContext} from "react";

//context
import TodoListContext from "../contexts/TodoList.js";

function TodoForm () {
   const {dispatch} = useContext(TodoListContext);
   const [taskName, setTaskName] = useState("");

   const handleChange = event => {
      setTaskName(event.target.value);
   };

   const handleAddTask = event => {
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

   const handleClear = event => {
      event.preventDefault();

      dispatch({type: "CLEAR_COMPLETED"});
   };

   return (
      <form>
         <input 
            type="text" 
            placeholder="...todo" 
            onChange={handleChange} 
            value={taskName} 
         />
         <button onClick={handleAddTask}>Add Task</button>
         <button onClick={handleClear}>Clear Completed</button>
      </form>
   );
}

export default TodoForm;