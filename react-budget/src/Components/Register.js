import React, { useState } from "react";
import { FormContainer, Form, Input, LargeFormTitle } from '../Styled-Components/Form';
import { Button } from '../Styled-Components/Button';
import { Message } from '../Styled-Components/General';
import axios from 'axios';

const Register = (props) => {

    const [user, setUser] = useState({ username: "", password: "", first_name: "", last_name: "" });
    const [message, setMessage] = useState({color: null, message: null});

    const url = "https://budget-app-cw.herokuapp.com/api/users/register";
    const credentials = {
        email: user.username,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name
    }

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
       axios.post(url, credentials)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            props.setUser(res.data.user);
            props.history.push('/');
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <FormContainer>
            <LargeFormTitle>Register For An Account</LargeFormTitle>
            <Form onSubmit={event => handleSubmit(event)}>

                    <Input type="text" name="first_name" placeholder="First Name" value={user.first_name} onChange={event => handleChange(event)} required></Input>

                    <Input type="text" name="last_name" placeholder="Last Name" value={user.last_name} onChange={event => handleChange(event)} required></Input>

                    <Input type="email" name="username" placeholder="email@test.com" value={user.username} onChange={event => handleChange(event)} required></Input>

                    <Input type="password" name="password" placeholder="Password" value={user.password} minLength="6" onChange={event => handleChange(event)} required></Input>

                <Button type="submit">Register</Button>
            </Form>
            {message.message && <Message color={message.color}>{message.message}</Message>}
            <p>Already a member? <a href="/login">Login now</a></p>
        </FormContainer>
    );
}

export default Register;