import React from "react";

import { storiesOf } from "@storybook/react";
import {
  number,
  selectV2,
  text,
  withKnobs
} from "@storybook/addon-knobs/react";

import backgrounds from "../../storybook/backgrounds";

import Button from "../Button";
import Card from ".";
import Grid from "../Grid";
import Row from "../Row";

const types = {
  Default: "default",
  Tight: "tight",
  Loose: "loose"
};

storiesOf("Card", module)
  .addDecorator(backgrounds)
  .addDecorator(withKnobs)
  .addDecorator(story => <Grid>{story()}</Grid>)
  .add("Plain Text", () => {
    const content = text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam semper sodales massa vitae tempor. Nam tempor ullamcorper metus sed condimentum. Suspendisse vel viverra velit. Vivamus magna dui, maximus tristique lacus in, finibus ullamcorper odio."
    );
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <Row>
        <Card type={type}>
          <p>{content}</p>
        </Card>
      </Row>
    );
  })
  .add("With Button", () => {
    const content = text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu..."
    );
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <Row>
        <Card type={type}>
          <p>{content}</p>
          <Button>Read More</Button>
        </Card>
      </Row>
    );
  })
  .add("Grid", () => {
    const count = number("Amount of Cards", 2, {
      min: 0,
      max: 10,
      step: 1
    });

    const cards = [];

    for (let i = 0; i < count; i++) {
      cards.push(
        <Card key={i}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas
            pulvinar in ante eu porta. Maecenas ac malesuada arcu...
          </p>
          <Button>Read More</Button>
        </Card>
      );
    }

    return <Row>{cards}</Row>;
  });
