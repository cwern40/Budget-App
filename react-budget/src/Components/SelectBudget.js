import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const SelectBudget = (props) => {
    console.log(props);
    return (
        <div>
            <Link to={`/${props.budget.id}`}>{props.budget.budget_name}</Link>
        </div>
    )
}

export default SelectBudget;