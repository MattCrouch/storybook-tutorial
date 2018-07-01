import React from "react";
import "./styles.css";

const Card = ({ children, type }) => {
  const classes = ["Card"];

  if (type === "tight") {
    classes.push("Card__tight");
  } else if (type === "loose") {
    classes.push("Card__loose");
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Card;
