import React from "react";

const ItemSelector = props => {
  console.log(props);

  const itemBtns = props.items.map((item, index) => {
    return (
      <button
        className="item"
        onClick={props.handleItemSelect}
        key={index}
        value={item.name}
      >
        <img className="item__img" src={item.img} alt={item.name} />
        <span className="item__title">{item.name}</span>
      </button>
    );
  }, this);

  return <>{itemBtns}</>;
};

export default ItemSelector;
