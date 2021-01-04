import React from 'react';
import ExpensesItem from './ExpensesItem';

const Expenses = (props) => {
    console.log('Expenses', props)
    
    return (
        <div>
            <h2>Expenses</h2>
            {props.expenses.map((item, i) => (
                <ExpensesItem key={i} item={item} index={i} />
            ))}
        </div>
    )
}

export default Expenses;