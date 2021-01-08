import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Income from './Income';
import Expenses from './Expenses';
import PieChart from './Pie-Chart';
import { ComponentHeader, BudgetInfoContainer, IncomeExpenseContainer, PieChartContainer } from '../Styled-Components/General';

const Budget = (props) => {
    const [budgetInfo, setbudgetInfo] = useState({id: null, budget_name: "", savings_amount: 0});
    const [budgetExpenses, setbudgetExpenses] = useState([]);
    const [budgetIncome, setbudgetIncome] = useState([]);

    const url =`https://budget-app-cw.herokuapp.com/api/budgets/${props.match.params.id}`;
    const headers = {
        authorization: localStorage.getItem('token'),
    }

    const refresh = () => {
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
    }

    useEffect(() => {
        refresh()
    }, [])

    console.log(budgetInfo);
    return (
        <div>
            <BudgetInfoContainer>
            <ComponentHeader>{budgetInfo.budget_name}</ComponentHeader>
                <PieChartContainer>
                    <PieChart income={budgetIncome} expenses={budgetExpenses}/>
                </PieChartContainer>
                <IncomeExpenseContainer>
                    <Income income={budgetIncome} />
                    <Expenses expenses={budgetExpenses} />
                </IncomeExpenseContainer>
            </BudgetInfoContainer>
        </div>
    )
}

export default Budget;