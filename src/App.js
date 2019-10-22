import React from 'react';
import styled from "styled-components";
import {APP_WIDTH} from "./components/style-vars.js";
import "./App.css";
import TodoList from "./components/TodoList.js";

const AppContainer = styled.div`
   margin: 0 auto;
   width: ${APP_WIDTH};
   box-shadow: inset 0 -3px 6px 0 coral;
   

   display: flex;
   flex-direction: column;
   align-items: center;
`;

function App() {
   return (
      <AppContainer>
         <h1>Welcome to your Todo App!</h1>
         <TodoList />
      </AppContainer>
   );
}

export default App;
