import React, { useState } from 'react';

const RevenueItem = (props) => {

    return (
        <div>
            {props.item.name} {props.item.amount}
        </div>
    )
}

export default RevenueItem;