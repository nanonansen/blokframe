import React from "react";

const ItemSelector = props => {
  console.log(props);

  const itemBtns = props.items.map((item, index) => {
    return (
      <div key={index}>
        <button
          className="item"
          onClick={props.handleItemSelect}
          value={item.name}
        >
          <img className="item__img" src={item.img} alt={item.name} />
          <span className="item__title">{item.name}</span>
        </button>
      </div>
    );
  }, this);

  return <>{itemBtns}</>;
};

export default ItemSelector;
