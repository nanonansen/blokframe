import React from "react";

const SVG = props => (
    <svg
        height={props.height}
        width={props.width}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>e remove</title>
        <g fill="#000000" stroke="#000000" strokeWidth="1">
            <line
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                x1="13.5"
                x2="2.5"
                y1="2.5"
                y2="13.5"
            />
            <line
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                x1="2.5"
                x2="13.5"
                y1="2.5"
                y2="13.5"
            />
        </g>
    </svg>
);

export default SVG;
