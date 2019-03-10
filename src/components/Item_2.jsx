import React from "react";

const Item2 = props => {
  return (
    <div className="content__row">
      <h3>I'm an item_2 component</h3>
      <div className="action">
        <button onClick={props.handleDelete}>Delete</button>
        <button onClick={props.handleMoveUp}>Up</button>
        <button onClick={props.handleMoveDown}>Down</button>
      </div>
    </div>
  );
};

export default Item2;
