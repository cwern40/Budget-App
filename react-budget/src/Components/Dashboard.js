import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PageContainer, H2Title } from '../Styled-Components/General';
import Budget from './Budget';
import SelectBudget from './SelectBudget';

const Dashboard = (props) => {
    console.log("Dashboard", props);
    return (
        <PageContainer>
            <H2Title>Dashboard</H2Title>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (<SelectBudget {...props} budgets={props.budgets} user={props.user} />)} />
                    <Route exact path="/:id" component={Budget} />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        </PageContainer>
    )
}

export default Dashboard;