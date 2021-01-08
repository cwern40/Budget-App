import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';

function App() {

  const [user, setUser] = useState({id: null, email: "", first_name: "", last_name: ""});
  const [budgets, setBudgets] = useState([]);

  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} budgets={budgets} user={user} />
          <Route exact path="/register" render={(props) => <Register {...props} setUser={setUser} />} />
          <Route exact path="/login" render={(props) => <Login {...props} setUser={setUser} setBudgets={setBudgets} />} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
