import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";

import backgrounds from "../../storybook/backgrounds";

import Button from ".";
import Grid from "../Grid";
import Row from "../Row";

const sizes = {
  Default: "",
  Small: "small",
  Large: "large"
};

const types = {
  Default: "default",
  Primary: "primary",
  Danger: "danger"
};

storiesOf("Button", module)
  .addDecorator(backgrounds)
  .addDecorator(withKnobs)
  .addDecorator(story => <Grid>{story()}</Grid>)
  .add("Basic Usage", () => {
    const buttonText = text("Label", "This is Net Magazine");
    const size = selectV2("Size", sizes, Object.values(sizes)[0]);
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <Row>
        <Button onClick={action("button clicked")} size={size} type={type}>
          {buttonText}
        </Button>
      </Row>
    );
  });
