import React, { useState } from 'react';

const IncomeItem = (props) => {

    return (
        <div>
            {props.item.income_name} {props.item.income_amount}
        </div>
    )
}

export default IncomeItem;