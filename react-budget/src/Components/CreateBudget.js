import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HorixontalInput, HorizontalForm } from '../Styled-Components/Form'
import { HorFormButton } from '../Styled-Components/Button'

const CreateBudget = (props) => {

    const [newBudget, setnewBudget] = useState({budget_name: "", savings_amount: ""});
    const url = "https://budget-app-cw.herokuapp.com/api/budgets";
    const headers = {
        authorization: localStorage.getItem('token'),
    };
    const data = {
        budget_name: newBudget.budget_name,
        savings_amount: parseInt(newBudget.savings_amount),
        user_id: props.user.id
    }
    const handleChange = event => {
        setnewBudget({...newBudget, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data)
        axios.post(url, data, { headers })
            .then((res) => {
                console.log(res);
                setnewBudget({budget_name: "", savings_amount: ""});
            })
            .catch((err) => {
                console.log(err);
            })
    }
    console.log("Create Budget", props)
    return (
        <div>
            <HorizontalForm onSubmit={(event) => handleSubmit(event)}>

                <HorixontalInput type="text" name="budget_name" placeholder="Name Your Budget" size="23" value={newBudget.budget_name} onChange={event => handleChange(event)} required />

                <HorixontalInput type="text" name="savings_amount" placeholder="Savings Amount (Optional)" size="23" value={newBudget.savings_amount} onChange={event => handleChange(event)} />
                <HorFormButton type="Submit">Create</HorFormButton>
            </HorizontalForm>
        </div>
    )
}

export default CreateBudget;