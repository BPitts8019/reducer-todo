import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
// import {APP_WIDTH} from "./components/style-vars.js";
// import styled from "styled-components";

//context
import TodoListContext from "../contexts/TodoList.js";

// const Form = styled.form`
//    max-width: 450px;

//    display: flex;
//    flex-direction: column;
// `;

// const BtnContainer = styled.div`
//    display: flex;
//    justify-content: space-around;
// `;

// const Button = styled.button`
//    width: 100px;
//    line-height: 1.4;
// `;

function TodoForm() {
   const { dispatch } = useContext(TodoListContext);
   const [taskName, setTaskName] = useState("");

   const handleChange = event => {
      setTaskName(event.target.value);
   };

   // const focusOnInput = () => {
   //    document.;
   // };

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
      document.forms.todoForm.addTask.focus();

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

      document.forms.todoForm.addTask.focus();
      dispatch({ type: "CLEAR_COMPLETED" });
   };

   return (
      <form className="todo-form" name="todoForm">
         {/* <FontAwesomeIcon icon={faClipboardList} color="lightGrey" size="2x" /> */}
         <input
            type="text"
            name="addTask"
            placeholder="...todo"
            onChange={handleChange}
            value={taskName}
         />
         <button type="submit" onClick={handleAddTask}>Add Task</button>
         <button onClick={handleClear}>Clear Completed</button>
         {/* <BtnContainer>
            <Button onClick={handleAddTask}>Add Task</Button>
            <Button onClick={handleClear}>Clear Completed</Button>
         </BtnContainer> */}
      </form>
   );
}

export default TodoForm;