import React from "react";
import Icon from "../icons/index";

const Item = props => {
    return (
        <div className="content__row">
            <img src={props.image} alt={props.name} />
            <div className="action">
                <h3>{props.name}</h3>
                <div className="action__buttons">
                    <button onClick={props.handleDelete}>
                        <Icon name="delete" width={16} height={16} />
                    </button>
                    <button onClick={props.handleMoveUp}>
                        <Icon name="arrow-up" width={16} height={16} />
                    </button>
                    <button onClick={props.handleMoveDown}>
                        <Icon name="arrow-down" width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
