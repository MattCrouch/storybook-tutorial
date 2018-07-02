import React from "react";
import "./styles.css";

const Button = ({ children, onClick, size, type }) => {
  const classes = ["Button"];

  if (type === "primary") {
    classes.push("Button--primary");
  } else if (type === "danger") {
    classes.push("Button--danger");
  }

  if (size === "small") {
    classes.push("Button--small");
  } else if (size === "large") {
    classes.push("Button--large");
  }

  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
