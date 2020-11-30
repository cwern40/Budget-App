import React, { useState } from "react";
import Form from "../Styled-Components/Form";
import axios from 'axios';

const Register = (props) => {

    const [user, setUser] = useState({ username: "", password: "", first_name: "", last_name: "" });
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
            console.log(res);
            localStorage.setItem('token', res.data.token);
            props.setUser(res.data.user);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <Form onSubmit={event => handleSubmit(event)}>
            <h2>Register For An Account</h2>
            <label>First Name
                <input type="text" name="first_name" placeholder="John" value={user.first_name} onChange={event => handleChange(event)} required></input>
            </label>
            <label>Last Name
                <input type="text" name="last_name" placeholder="Doe" value={user.last_name} onChange={event => handleChange(event)} required></input>
            </label>
            <label>Email
                <input type="email" name="username" placeholder="email@test.com" value={user.username} onChange={event => handleChange(event)} required></input>
            </label>
            <label>Password
                <input type="password" name="password" placeholder="Password" value={user.password} minLength="6" onChange={event => handleChange(event)} required></input>
            </label>
            <button type="submit">Register</button>
        </Form>
    );
}

export default Register;