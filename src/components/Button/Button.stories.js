import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from ".";

storiesOf("Button", module).add("default", () => (
  <Button onClick={action("button clicked")}>This is a button</Button>
));
