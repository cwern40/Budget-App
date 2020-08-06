import React, { useState } from 'react';
import {BrowserRouter, Router } from 'react-router-dom';
import Budget from './Budget';

const Dashboard = (props) => {

    const [revenue, setRevenue] = useState([]);
    const [expenses, setExpenses] = useState([]);

    return (
        <div>
            <BrowserRouter>
                <Router exact path="/" component={Budget} revenue={revenue} expenses={expenses}/>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;