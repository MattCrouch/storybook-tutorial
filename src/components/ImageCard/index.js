import React from "react";

import Card from "../Card";

import "./styles.css";

const ImageCard = props => {
  const { alternate, children, imageUrl, vertical } = props;
  const classes = ["ImageCard"];

  if (alternate) {
    classes.push("ImageCard--alternate");
  }

  if (vertical) {
    classes.push("ImageCard--vertical");
  }

  const content = [
    <div
      className="ImageCard__image"
      key="image"
      style={{ backgroundImage: `url(${imageUrl}` }}
    />,
    <div className="ImageCard__content" key="content">
      {children}
    </div>
  ];

  if (alternate) {
    content.reverse();
  }

  return (
    <Card {...props} className={classes.join(" ")}>
      {content}
    </Card>
  );
};

export default ImageCard;
