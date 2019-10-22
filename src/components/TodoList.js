import React, {useReducer} from "react";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

//reducer
import {initialState, reducer} from "../reducers/TodoList.js";

//context
import TodoListContext from "../contexts/TodoList.js";

//components
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

//styles
const Container = styled.div`
   width: 450px;

   display: flex;
   flex-direction: column;
   justify-content: center;
`;

function TodoList () {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <TodoListContext.Provider value={{dispatch}}>
         <TodoForm />
         <div className="todo-list">
            {state.map(item => <Todo key={item.id} {...item}/>)}
         </div>
      </TodoListContext.Provider>
   );
}

export default TodoList;