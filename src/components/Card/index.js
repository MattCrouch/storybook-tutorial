import React from "react";
import "./styles.css";

const Card = props => {
  const { children, className, type } = props;

  const classes = ["Card", className];

  if (type === "tight") {
    classes.push("Card__tight");
  } else if (type === "loose") {
    classes.push("Card__loose");
  }

  return (
    <div {...props} className={classes.join(" ")}>
      {children}
    </div>
  );
};

export default Card;
