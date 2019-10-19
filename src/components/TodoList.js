import React, {useReducer} from "react";

//reducer
import {initialState, reducer} from "../reducers/TodoList.js";

//context
import TodoListContext from "../contexts/TodoList.js";

//components
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

function TodoList () {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <TodoListContext.Provider value={{dispatch}}>
         <div>
            <TodoForm />
            <div className="todo-list">
               {state.map(item => <Todo key={item.id} {...item}/>)}
            </div>
         </div>
      </TodoListContext.Provider>
   );
}

export default TodoList;