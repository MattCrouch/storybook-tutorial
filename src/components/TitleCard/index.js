import React from "react";

import Card from "../Card";

import "./styles.css";

const TitleCard = props => {
  const { children, imageUrl, invert } = props;
  const classes = ["TitleCard"];

  if (invert) {
    classes.push("TitleCard--invert");
  }

  return (
    <Card
      {...props}
      className={classes.join(" ")}
      style={{ backgroundImage: `url(${imageUrl}` }}
    >
      {children}
    </Card>
  );
};

export default TitleCard;
