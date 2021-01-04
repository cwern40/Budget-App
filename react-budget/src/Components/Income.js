import React, { useState } from 'react';
import IncomeItem from './IncomeItem';

const Income = (props) => {

    return (
        <div>
            <h2>Revenue</h2>
            {props.income.map((item, i) => (
                <IncomeItem key={i} item={item} index={i} />
            ))}
        </div>
    )
}

export default Income;