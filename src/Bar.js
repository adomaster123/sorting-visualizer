import React from 'react'

const Bar = (props) => {
    const barStyles = {
        width: `10%`,
        height: `${props.number}px`,
        background: "gray",
        border: "1px solid black",
        display: "inline-block",
        alignItems: "center",
        position: "relative",
        bottom: "0px",
        textAlign: "center",
    }
    return (
        <div className="bar" style={barStyles}>
            <p>{props.number}</p>
        </div>
    )
}

export default Bar
