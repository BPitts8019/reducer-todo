import React, {useContext} from "react";

//context
import TodoListContext from "../contexts/TodoList.js";

/*
{
   item: 'Learn about reducers',
   completed: false,
   id: 3892987589
}
*/
function Todo ({id, item, completed}) {
   const {dispatch} = useContext(TodoListContext);

   return (
      <div 
         id={id} 
         className={(completed)? "todo completed" : "todo"}
         onClick={event => {dispatch({type: "TOGGLE_COMPLETED", payload: id})}}
      >
         {item}
      </div>
   );
}

export default Todo;