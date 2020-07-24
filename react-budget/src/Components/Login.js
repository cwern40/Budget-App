import React, { useState } from "react";
import Form from "../Styled-Components/Form"

const Login = (props) => {

    const [user, setUser] = useState({username: "", password: ""});

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        setUser({ username: "", password: "" });
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <h2>Sign In To Your Account</h2>
            <label>Email
                <input type="email" name="username" placeholder="email@test.com" value={user.username} onChange={event => handleChange(event)} required></input>
            </label>
            <label>Password
                <input type="password" name="password" placeholder="Password" minLength="6" value={user.password} onChange={event => handleChange(event)} required></input>
            </label>
            <button type="submit">Login</button>
        </Form>
    );
}

export default Login;