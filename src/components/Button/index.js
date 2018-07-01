import React, { Component } from "react";
import "./styles.css";

const Button = ({ type, children }) => {
  const classes = ["Button"];

  if (type === "primary") {
    classes.push("Button__primary");
  } else if (type === "danger") {
    classes.push("Button__danger");
  }

  return <button className={classes.join(" ")}>{children}</button>;
};

export default Button;
