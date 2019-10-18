import React from 'react';

import './App.css';
import TodoList from "./components/TodoList.js";

function App() {
   return (
      <div>
         <h1>Welcome to your Todo App!</h1>
         <TodoList />
      </div>
   );
}

export default App;
