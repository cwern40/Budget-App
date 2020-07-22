import React from "react";
import Form from "../Styled-Components/Form"

const Register = (props) => {
    return (
        <Form>
            <h2>Register For An Account</h2>
            <label>Email
                <input></input>
            </label>
            <label>Password
                <input></input>
            </label>
        </Form>
    );
}

export default Register;