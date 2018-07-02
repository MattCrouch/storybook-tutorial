import React from "react";
import "./styles.css";

const Card = props => {
  const { children, className, type } = props;

  const classes = ["Card", className];

  if (type === "tight") {
    classes.push("Card--tight");
  } else if (type === "loose") {
    classes.push("Card--loose");
  }

  return (
    <div className={classes.join(" ")} style={props.style}>
      {children}
    </div>
  );
};

export default Card;
