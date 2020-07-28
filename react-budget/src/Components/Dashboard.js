import React, { useState } from 'react';
import {BrowserRouter, Router } from 'react-router-dom';
import PieChart from './Pie-Chart';

const Dashboard = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Router exact path="/" component={PieChart} />
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;