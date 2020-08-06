import React, { useState } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Budget from './Budget';

const Dashboard = () => {

    const [revenue, setRevenue] = useState([{name: "job", amount: 1100.25}, {name: "stock", amount: 500.55}]);
    const [expenses, setExpenses] = useState([]);
 
    return (
        <div>
            <h2>Dashboard</h2>
            <BrowserRouter>
                <Route exact path="/" render={(props) => <Budget {...props} revenue={revenue} expenses={expenses} />}/>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;