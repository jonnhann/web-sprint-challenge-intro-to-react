import React from 'react';
import './App.css';
import Character from "./components/Character";

import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 50px;
    text-align: center;
    margin: 0;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <H1>Characters</H1>
      <Character />
    </div>
  );
}

export default App;
