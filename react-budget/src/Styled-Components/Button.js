import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 5px 0px;
    border-radius: 5px;
    background: #0575E6;
    color: white;
    align-self: center;
    margin-top: 30px;
    width: 170px;
    border: none;

    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }
`

const HorFormButton = styled.button`
    padding: 5px 0px;
    border-radius: 5px;
    background: #0575E6;
    color: white;
    align-self: center;
    width: 170px;
    border: none;
    self-align: center;

    &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }
`

export {
    Button,
    HorFormButton,
}