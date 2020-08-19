import React from 'react'

const Bar = (props) => {
    const barStyles = {
        width: `1%`,
        height: `${props.number}px`,
        background: "gray",
        border: "1px solid black",
        display: "inline-block",
        position: "relative",
        bottom: "0px",
        textAlign: "center",
    }
    if (props.selectedIndex.includes(props.index)) {
        barStyles.background = "red"
    }
    if (JSON.stringify(props.array) === JSON.stringify(props.array.slice().sort((a, b) => a - b))) {
        barStyles.background = "green"
    }
    return (
        <div className="bar" style={barStyles}>
        </div>
    )
}

export default Bar
