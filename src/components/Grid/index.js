import React from "react";
import "./styles.css";

const Grid = ({ children, className }) => {
  const classes = ["Grid", className];

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Grid;
