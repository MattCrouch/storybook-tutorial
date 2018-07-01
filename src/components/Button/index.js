import React from "react";
import "./styles.css";

const Button = ({ children, onClick, type }) => {
  const classes = ["Button"];

  if (type === "primary") {
    classes.push("Button__primary");
  } else if (type === "danger") {
    classes.push("Button__danger");
  }

  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
