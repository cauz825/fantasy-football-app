import React, { useState, useEffect } from 'react';
import './App.css';
import Stories from './containers/Stories'
// import NavBar from './components/NavBar'
import { Container } from 'semantic-ui-react'

function App() {   
  
  const [topStories, setTopStories] = useState({})

  // useEffect(() => {
  //   fetch('')
  //     .then(resp => resp.json())
  //     .then(console.log)
  // }, []
  // )

  return (
    <Container>
      {/* <NavBar /> */}
      <Stories />
    </Container>
  );
}

export default App;
