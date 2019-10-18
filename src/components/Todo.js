import React from "react";

/*
{
   item: 'Learn about reducers',
   completed: false,
   id: 3892987589
}
*/
function Todo ({id, item, completed}) {
   return (
      <div 
         id={id} 
         className={(completed)? "todo completed" : "todo"}
         onClick={event => {console.log(event.target.id)}}
      >
         {item}
      </div>
   );
}

export default Todo;