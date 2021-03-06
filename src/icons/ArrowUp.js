import React from "react";

const SVG = props => (
    <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>small up</title>
        <g fill="#000000" stroke="#000000" strokeWidth="1">
            <polyline
                fill="none"
                points="3.5,9.5 8,5 12.5,9.5 "
                stroke="#000000"
                strokeLinecap="round"
            />
        </g>
    </svg>
);

export default SVG;
