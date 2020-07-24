import React, { useState } from "react";
import Form from "../Styled-Components/Form"

const Register = (props) => {

    const [user, setUser] = useState({ username: "", password: "" });

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user);
        setUser({ username: "", password: "" });
    }

    return (
        <Form onSubmit={event => handleSubmit(event)}>
            <h2>Register For An Account</h2>
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