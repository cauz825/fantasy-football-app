import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'
import Teams from './components/Teams';
import Players from './components/Players'
import Top from './containers/Top'

function App() {
  
  const [category, setCategory] = useState('Top')
    
  function displayStories() {
    return(
        <div>
            
        </div>
    )
}
  
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
          <Route path="/top" component ={Top} />
          <Route path="/teams" component={Teams} />
          <Route path='/players' component={Players} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
