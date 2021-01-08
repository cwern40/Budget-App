import React, { useState } from 'react';
import BudgetItem from './BudgetItem';
import CreateBudget from './CreateBudget';
import { BudgetContainer, NoBudget, SelectBudgetContainer, ComponentHeader } from '../Styled-Components/General';


const SelectBudget = (props) => {
    console.log("SelectBudget", props);
    return (
        <SelectBudgetContainer>
            <ComponentHeader>Select or Create a Budget</ComponentHeader>
            <BudgetContainer>
            {props.budgets.length !== 0 ? props.budgets.map((budget, i) => (
                <BudgetItem key={i} budget={budget} />
            )) : <NoBudget>You don't have any budgets to select so you'll have to create one</NoBudget>}
            </BudgetContainer>
            <CreateBudget user={props.user} />
        </SelectBudgetContainer>
    )
}

export default SelectBudget;