import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs/react";

import backgrounds from "../../storybook/backgrounds";

import Button from "../Button";
import TitleCard from ".";

storiesOf("Title Card", module)
  .addDecorator(backgrounds)
  .addDecorator(withKnobs)
  .add("Title", () => {
    const title = text("Title", "Lorem ipsum");
    const imageUrl = text("Image URL", "/image.jpg");
    const invert = boolean("Invert", true);

    return (
      <TitleCard invert={invert} imageUrl={imageUrl}>
        <h1>{title}</h1>
      </TitleCard>
    );
  })
  .add("Action", () => {
    const title = text("Title", "Lorem ipsum");
    const description = text(
      "Description",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu..."
    );
    const buttonText = text("Button Text", "Read More");
    const imageUrl = text("Image URL", "/image.jpg");
    const invert = boolean("Invert", true);

    return (
      <TitleCard invert={invert} imageUrl={imageUrl}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button onClick={action("button clicked")}>{buttonText}</Button>
      </TitleCard>
    );
  });
