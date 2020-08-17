import React from 'react';
import Bar from './Bar';

const Graph = (props) => {
    return (
        <div>
            {props.arrayToSort.map(number => {
                return (
                    <Bar key={1 + Math.random()} array={props.arrayToSort} index={props.arrayToSort.indexOf(number)} selectedIndex={props.selectedIndex} number={number}/>
                )
            })}
        </div>
    )
}

export default Graph
