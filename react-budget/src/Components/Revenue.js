import React, { useState } from 'react';
import RevenueItem from './RevenueItem';

const Revenue = (props) => {
    console.log("Props", props)

    return (
        <div>
            <h2>Revenue</h2>
            {props.revenue.map((item, i) => (
                <RevenueItem key={i} item={item} index={i} />
            ))}
        </div>
    )
}

export default Revenue;