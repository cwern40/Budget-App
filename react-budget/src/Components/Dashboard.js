import React, { useState } from 'react';
import {BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Budget from './Budget';
import SelectBudget from './SelectBudget';
import CreateBudget from './CreateBudget';

const Dashboard = (props) => {
 
    return (
        <div>
            <h2>Dashboard</h2>
            <BrowserRouter>
                <Switch>
                    {props.budgets.map((budget, i) => (
                        <Route exact path="/" render={(props) => <SelectBudget key={i} budget={budget} />} />
                    ))}
                    <Route exact path="/:id" component={Budget} />
                    <Route exact path="/" component={CreateBudget} />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;