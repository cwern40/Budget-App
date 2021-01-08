import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {

    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={() => {
            const token = localStorage.getItem('token')

            return token
            ? <Component budgets={props.budgets} user={props.user}/>
            : <Redirect to="/login" />
        }} />
    )
}

export default PrivateRoute;