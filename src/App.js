import React from 'react';
import './App.css';
import Form from './components/Form'
import Standings from './components/Standings'
import Players from './components/Players'

function App() {   
  return (
    <div>
      Top Level
      <Form /><br></br>
      <Standings /><br></br>
      <Players />
    </div>
  )
}

export default App;
