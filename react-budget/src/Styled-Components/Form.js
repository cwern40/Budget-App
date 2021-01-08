import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    justify-content: center;
    max-width: 460px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    padding-bottom: 30px;
`
const Label = styled.label`
    display: block;
    width: 100%;
    text-align: left;
    margin: 10px auto;
    padding-left: 20px;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 20px auto;
    width: 100%;
`

const Input = styled.input`
    margin: 10px auto;
    border-radius: 5px;
    background: rgba(240, 240, 240);
    border: 1px;
    padding: 5px 10px;
    text-align: center;
`

const HorizontalForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    padding-bottom: 30px;
    width: 100%;
    justify-content: center;
`

const HorixontalInput = styled.input`
    margin: 10px;
    border-radius: 5px;
    background: rgba(240, 240, 240);
    border: 1px;
    padding: 5px 10px;
    text-align: center;
`

const LargeFormTitle = styled.h2`
    display: block;
    width: 100%;
    margin: 15px auto;
`

export {
    FormContainer,
    Label,
    Form,
    Input,
    HorizontalForm,
    HorixontalInput,
    LargeFormTitle,
};