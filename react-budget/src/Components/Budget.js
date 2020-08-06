import React from 'react';
import Revenue from './Revenue';

const Budget = (props) => {
    console.log("Budget", props);

    return (
        <div>
            <h3>Budget</h3>
            <Revenue revenue={props.revenue} />
        </div>
    )
}

export default Budget;