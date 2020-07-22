import React from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
