import React from "react";

//components
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

function TodoList () {
   return (
      <div>
         <TodoForm />
         <div className="todo-list">
            This is a list of todo's
         </div>
      </div>
   );
}

export default TodoList;