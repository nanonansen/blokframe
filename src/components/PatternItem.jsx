import React from "react";

const PatternItem = props => {
    return (
        <button
            className="item"
            onClick={props.handleItemSelect}
            value={props.id}
            key={props.id}
        >
            <div>
                <img src={props.image} alt={props.name} className="item__img" />
            </div>
            <span className="item__title">{props.name}</span>
        </button>
    );
};

export default PatternItem;
