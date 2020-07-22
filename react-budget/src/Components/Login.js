import React from "react";
import Form from "../Styled-Components/Form"

const Login = (props) => {
    return (
        <Form>
            <h2>Sign In To Your Account</h2>
            <label>Email
                <input></input>
            </label>
            <label>Password
                <input></input>
            </label>
        </Form>
    );
}

export default Login;