import React from "react";

import Mobile from "./Mobile";
import Tablet from "./Tablet";
import Desktop from "./Desktop";

const Icon = props => {
    switch (props.name) {
        case "mobile":
            return <Mobile />;
        case "tablet":
            return <Tablet />;
        case "desktop":
            return <Desktop />;
        default:
            return;
    }
};

export default Icon;
