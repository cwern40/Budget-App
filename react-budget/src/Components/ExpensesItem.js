import React from 'react';

const ExpensesItem = (props) => {

    return (
        <div>
            {props.item.name} {props.item.amount}
        </div>
    )
}

export default ExpensesItem;