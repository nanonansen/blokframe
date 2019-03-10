import React from "react";

const Item1 = props => {
  return (
    <div className="content__row">
      <h3>I'm an item_1 component</h3>
      <div className="action">
        <button onClick={props.handleDelete}>Delete</button>
        <button onClick={props.handleMoveUp}>Up</button>
        <button onClick={props.handleMoveDown}>Down</button>
      </div>
    </div>
  );
};

export default Item1;
