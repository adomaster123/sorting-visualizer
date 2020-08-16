import React from 'react'

const Bar = (props) => {
    const barStyles = {
        width: `1%`,
        height: `${props.number}px`,
        background: props.selectedIndex.includes(props.index) ? "red":"gray",
        border: "1px solid black",
        display: "inline-block",
        position: "relative",
        top: "0px",
        textAlign: "center",
    }
    const numberStyles = {
        fontSize: "6px"
    }
    return (
        <div className="bar" style={barStyles}>
            <p style={numberStyles}>{props.number}</p>
        </div>
    )
}

export default Bar
