import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

const App = () => (
  <Fragment>
    <Navbar/>
   <Switch>
     <Route exact path ="/" component={Home} />
     <Route exact path ="/about" component={About} />
    
     
   </Switch>
  
  </Fragment>
)

export default App;