import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
