import React from "react";

const Container = props => {
  return <div className={`container ${props.size}`}>{props.children}</div>;
};

export default Container;
