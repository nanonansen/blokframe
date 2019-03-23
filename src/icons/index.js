import React from "react";

import Mobile from "./Mobile";
import Tablet from "./Tablet";
import Desktop from "./Desktop";
import Delete from "./Delete";
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import Logo from "./Logo";

const Icon = props => {
    switch (props.name) {
        case "mobile":
            return <Mobile />;
        case "tablet":
            return <Tablet />;
        case "desktop":
            return <Desktop />;
        case "delete":
            return <Delete height={props.height} width={props.width} />;
        case "arrow-up":
            return <ArrowUp height={props.height} width={props.width} />;
        case "arrow-down":
            return <ArrowDown height={props.height} width={props.width} />;
        case "logo":
            return <Logo />;
        default:
            return;
    }
};

export default Icon;
