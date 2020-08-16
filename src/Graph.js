import React from 'react';
import Bar from './Bar';

const Graph = (props) => {
    return (
        <div>
            {props.arrayToSort.map(number => {
                return (
                    <Bar key={1 + Math.random()} index={props.arrayToSort.indexOf(number)} selectedIndex={props.selectedIndex} number={number}/>
                )
            })}
        </div>
    )
}

export default Graph
