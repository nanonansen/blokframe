import React from "react";

import Item from "./Item";

const ItemList = props => {
    const newItems = props.selectedItems.map((item, index) => {
        console.log("Item", item);
        return (
            <Item
                key={index}
                handleDelete={() => props.handleDelete(index)}
                handleMoveUp={() => props.handleMoveUp(index)}
                handleMoveDown={() => props.handleMoveDown(index)}
                name={item.name}
                image={item.img}
            />
        );
        //     switch (item) {
        //         case "item_1":
        //             return (
        //                 <Item
        //                     key={index}
        //                     handleDelete={() => props.handleDelete(index)}
        //                     handleMoveUp={() => props.handleMoveUp(index)}
        //                     handleMoveDown={() => props.handleMoveDown(index)}
        //                     name={item}
        //                 />
        //             );
        //         case "item_2":
        //             return (
        //                 <Item2
        //                     key={index}
        //                     handleDelete={() => props.handleDelete(index)}
        //                     handleMoveUp={() => props.handleMoveUp(index)}
        //                     handleMoveDown={() => props.handleMoveDown(index)}
        //                 />
        //             );
        //         case "item_3":
        //             return (
        //                 <Item3
        //                     key={index}
        //                     handleDelete={() => props.handleDelete(index)}
        //                     handleMoveUp={() => props.handleMoveUp(index)}
        //                     handleMoveDown={() => props.handleMoveDown(index)}
        //                 />
        //             );
        //         default:
        //             return null;
        //     }
        // }, this);

        // return <div>{newItems}</div>;
    });
    return <div>{newItems}</div>;
};

export default ItemList;
