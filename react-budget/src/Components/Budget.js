import React from 'react';
import Revenue from './Revenue';
import Expenses from './Expenses';

const Budget = (props) => {
    console.log("Budget", props);

    return (
        <div>
            <h2>Budget</h2>
            <Revenue revenue={props.revenue} />
            <Expenses expenses={props.expenses} />
        </div>
    )
}

export default Budget;