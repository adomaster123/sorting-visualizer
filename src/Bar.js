import React from 'react'

const Bar = (props) => {
    const barStyles = {
        width: `1%`,
        height: `${props.number}px`,
        background: "lightblue",
        border: "1px solid black",
        display: "inline-block",
        position: "relative",
        bottom: "0px",
        textAlign: "center",
    }
    if (props.selectedIndex.includes(props.index)) {
        barStyles.background = "red"
    }
    if (props.sortedIndex.includes(props.index)) {
        barStyles.background = "green"
    }
    return (
        <div className="bar" style={barStyles}>
        </div>
    )
}

export default Bar
