import React, { useState } from 'react';
import Revenue from './Revenue';

const Budget = (props) => {

    return (
        <div>
            <Revenue revenue={props.revenue} />
        </div>
    )
}

export default Budget;