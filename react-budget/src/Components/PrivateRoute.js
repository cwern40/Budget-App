import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    console.log('Private Route', props);
    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={() => {
            const token = localStorage.getItem('token')

            return token
            ? <Component budgets={props.budgets}/>
            : <Redirect to="/login" />
        }} />
    )
}

export default PrivateRoute;