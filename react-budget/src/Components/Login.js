import React, { useState } from "react";
import { FormContainer, Form, Input, LargeFormTitle } from '../Styled-Components/Form';
import { Button } from '../Styled-Components/Button';
import { Message } from '../Styled-Components/General';
import axios from 'axios';



const Login = (props) => {

    const [login, setUser] = useState({username: "", password: ""});
    const [message, setMessage] = useState({color: null, message: null});

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
        setMessage({color: "black", message: "Loading..."})
        axios.post(url, credentials)
            .then((res) => {
                setMessage({color: "#28a745", message: "Logging In..."})
                localStorage.setItem('token', res.data.token);
                props.setUser(res.data.user);
                props.setBudgets(res.data.budgets);
                props.history.push(`/${res.data.user.id}`);
            })
            .catch((err) => {
                if(err.message.includes("401")) {
                    setMessage({color: "#dc3545", message: "Incorrect Username or Password"})
                }
            });
        setUser({ username: "", password: "" });
    }
console.log(message)
    return (
        <FormContainer>
            <LargeFormTitle>Sign In To Your Account</LargeFormTitle>
            <Form onSubmit={(event) => handleSubmit(event)}>

                    <Input type="email" name="username" placeholder="email@test.com" value={login.username} onChange={event => handleChange(event)} required></Input>

                    <Input type="password" name="password" placeholder="Password" minLength="6" value={login.password} onChange={event => handleChange(event)} required></Input>
                   
                <Button type="submit">Login</Button>
                
            </Form>
            {message.message && <Message color={message.color}>{message.message}</Message>}
            <p>Not a member? <a href="/register">Sign up now</a></p>
        </FormContainer>
    );
}

export default Login;