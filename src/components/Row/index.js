import React from "react";
import "./styles.css";

const Row = ({ children, className }) => {
  const classes = ["Row", className];

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Row;
