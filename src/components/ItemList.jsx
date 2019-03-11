import React from "react";
import Item1 from "./Item_1";
import Item2 from "./Item_2";
import Item3 from "./Item_3";

const ItemList = props => {
    const newItems = props.selectedItems.map((item, index) => {
        switch (item) {
            case "item_1":
                return (
                    <Item1
                        key={index}
                        handleDelete={() => props.handleDelete(index)}
                        handleMoveUp={() => props.handleMoveUp(index)}
                        handleMoveDown={() => props.handleMoveDown(index)}
                    />
                );
            case "item_2":
                return (
                    <Item2
                        key={index}
                        handleDelete={() => props.handleDelete(index)}
                        handleMoveUp={() => props.handleMoveUp(index)}
                        handleMoveDown={() => props.handleMoveDown(index)}
                    />
                );
            case "item_3":
                return (
                    <Item3
                        key={index}
                        handleDelete={() => props.handleDelete(index)}
                        handleMoveUp={() => props.handleMoveUp(index)}
                        handleMoveDown={() => props.handleMoveDown(index)}
                    />
                );
            default:
                return null;
        }
    }, this);

    return <div>{newItems}</div>;
};

export default ItemList;
