import React, { useState } from "react";
import Form from "../Styled-Components/Form";
import axios from 'axios';



const Login = (props) => {

    console.log("login", props)
    const [login, setUser] = useState({username: "", password: ""});
    const url = "https://budget-app-cw.herokuapp.com/api/users/login";
    const credentials = {
        email: login.username,
        password: login.password
    }

    const handleChange = event => {
        setUser({ ...login, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url, credentials)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                props.setUser(res.data.user);
                props.setBudgets(res.data.budgets);
                props.history.push(`/${res.data.user.id}`);
            })
            .catch((err) => {
                console.log(err);
            })
        setUser({ username: "", password: "" });
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <h2>Sign In To Your Account</h2>
            <label>Email
                <input type="email" name="username" placeholder="email@test.com" value={login.username} onChange={event => handleChange(event)} required></input>
            </label>
            <label>Password
                <input type="password" name="password" placeholder="Password" minLength="6" value={login.password} onChange={event => handleChange(event)} required></input>
            </label>
            <button type="submit">Login</button>
        </Form>
    );
}

export default Login;