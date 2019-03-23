import React from "react";
import _ from "lodash";

import PatternGroup from "./PatternGroup";

const PatternSelect = props => {
    const groupedItems = _.groupBy(props.items, "category");

    const entries = Object.entries(groupedItems);
    const itemBtns = entries.map((entry, index) => {
        return (
            <PatternGroup
                category={entry[0]}
                key={entry[0]}
                items={entry[1]}
                handleItemSelect={props.handleItemSelect}
            />
        );
    });

    return <>{itemBtns}</>;
};

export default PatternSelect;
