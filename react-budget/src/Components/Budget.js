import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Income from './Income';
import Expenses from './Expenses';

const Budget = (props) => {
    const [budgetInfo, setbudgetInfo] = useState({id: null, budget_name: "", savings_amount: 0});
    const [budgetExpenses, setbudgetExpenses] = useState([]);
    const [budgetIncome, setbudgetIncome] = useState([]);

    const url =`https://budget-app-cw.herokuapp.com/api/budgets/${props.match.params.id}`;
    const headers = {
        authorization: localStorage.getItem('token'),
    }

    useEffect(() => {
        axios.get(url, { headers })
            .then((res) => {
                console.log(res)
                setbudgetInfo(res.data.budget)
                setbudgetIncome(res.data.income)
                setbudgetExpenses(res.data.expenses)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h2>Budget</h2>
            <Income income={budgetIncome} />
            <Expenses expenses={budgetExpenses} />
        </div>
    )
}

export default Budget;