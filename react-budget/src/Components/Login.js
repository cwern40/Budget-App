import React, { useState } from "react";
import { FormContainer, Label, LoginTitle, Form, LoginInput } from '../Styled-Components/Form';
import { Button } from '../Styled-Components/Button'
import axios from 'axios';



const Login = (props) => {

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
        <FormContainer>
            <LoginTitle>Sign In To Your Account</LoginTitle>
            <Form onSubmit={(event) => handleSubmit(event)}>

                    <LoginInput type="email" name="username" placeholder="email@test.com" value={login.username} onChange={event => handleChange(event)} required></LoginInput>

                    <LoginInput type="password" name="password" placeholder="Password" minLength="6" value={login.password} onChange={event => handleChange(event)} required></LoginInput>

                <Button type="submit">Login</Button>
            </Form>
            <p>Not a member? <a href="/register">Sign up now</a></p>
        </FormContainer>
    );
}

export default Login;