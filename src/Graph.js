import React from 'react';
import Bar from './Bar';

const Graph = (props) => {
    return (
        <div>
            {props.arrayToSort.map(number => {
                return (
                    <Bar key={number} number={number}/>
                )
            })}
        </div>
    )
}

export default Graph
