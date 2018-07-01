import React from "react";

import { storiesOf } from "@storybook/react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";

import backgrounds from "../../storybook/backgrounds";

import Button from "../Button";
import Card from ".";

const types = {
  Default: "default",
  Tight: "tight",
  Loose: "loose"
};

storiesOf("Card", module)
  .addDecorator(backgrounds)
  .addDecorator(withKnobs)
  .add("Plain Text", () => {
    const content = text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam semper sodales massa vitae tempor. Nam tempor ullamcorper metus sed condimentum. Suspendisse vel viverra velit. Vivamus magna dui, maximus tristique lacus in, finibus ullamcorper odio."
    );
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <Card type={type}>
        <p>{content}</p>
      </Card>
    );
  })
  .add("With Button", () => {
    const content = text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu..."
    );
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <Card type={type}>
        <p>{content}</p>
        <Button>Read More</Button>
      </Card>
    );
  });
