import React from 'react';
import Bar from './Bar';

const Graph = (props) => {
    const graphStyles = {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        width: "90vw",
    }
    return (
        <div style={graphStyles}>
            {props.arrayToSort.map(number => {
                return (
                    <Bar sortedIndex={props.sortedIndex} key={1 + Math.random()} array={props.arrayToSort} index={props.arrayToSort.indexOf(number)} selectedIndex={props.selectedIndex} number={number}/>
                )
            })}
        </div>
    )
}

export default Graph
