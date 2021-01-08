import React, { useState } from 'react';
import { BudgetLink, IconContainer } from '../Styled-Components/General';
import { BudgetContainer, BudgetName } from '../Styled-Components/General';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'


const BudgetItem = (props) => {
    console.log(props);
    return (
        <BudgetContainer>
            <BudgetLink to={`/${props.budget.id}`}><BudgetName>{props.budget.budget_name}</BudgetName></BudgetLink>
            
            <IconContainer>
                <AiFillEdit />
                <AiFillDelete />
            </IconContainer>
        </BudgetContainer>
    )
}

export default BudgetItem;