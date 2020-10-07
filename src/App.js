import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Stories from './containers/Stories'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <NavBar />
      <Stories />
    </Container>
  );
}

export default App;
