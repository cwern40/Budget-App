import React from 'react';

const ExpensesItem = (props) => {

    return (
        <div>
            {props.item.expense_name} {props.item.expense_amount}
        </div>
    )
}

export default ExpensesItem;