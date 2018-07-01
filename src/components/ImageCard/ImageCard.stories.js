import React from "react";

import { storiesOf } from "@storybook/react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";

import backgrounds from "../../storybook/backgrounds";

import ImageCard from ".";

const types = {
  Default: "default",
  Tight: "tight",
  Loose: "loose"
};

storiesOf("Image Card", module)
  .addDecorator(backgrounds)
  .addDecorator(withKnobs)
  .add("Horizontal", () => {
    const content = text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam semper sodales massa vitae tempor. Nam tempor ullamcorper metus sed condimentum. Suspendisse vel viverra velit. Vivamus magna dui, maximus tristique lacus in, finibus ullamcorper odio. Fusce convallis fermentum tortor vel consequat. Aenean nec lacus ac erat ultrices condimentum. Praesent imperdiet lectus ut porta luctus. Proin at tempus turpis. Quisque rutrum eget libero in fringilla. Proin ullamcorper et est aliquet pretium. Proin hendrerit viverra risus, fringilla tristique mauris tempor lobortis. Nam faucibus euismod mattis."
    );
    const imageUrl = text("Image URL", "/image.jpg");
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <ImageCard imageUrl={imageUrl} type={type}>
        {content}
      </ImageCard>
    );
  })
  .add("Horizontal Right Align", () => {
    const content = text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam semper sodales massa vitae tempor. Nam tempor ullamcorper metus sed condimentum. Suspendisse vel viverra velit. Vivamus magna dui, maximus tristique lacus in, finibus ullamcorper odio. Fusce convallis fermentum tortor vel consequat. Aenean nec lacus ac erat ultrices condimentum. Praesent imperdiet lectus ut porta luctus. Proin at tempus turpis. Quisque rutrum eget libero in fringilla. Proin ullamcorper et est aliquet pretium. Proin hendrerit viverra risus, fringilla tristique mauris tempor lobortis. Nam faucibus euismod mattis."
    );
    const imageUrl = text("Image URL", "/image.jpg");
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <ImageCard alternate imageUrl={imageUrl} type={type}>
        {content}
      </ImageCard>
    );
  })
  .add("Vertical", () => {
    const content = text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus sem libero, sit amet scelerisque justo tempor ac. Maecenas pulvinar in ante eu porta. Maecenas ac malesuada arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam semper sodales massa vitae tempor. Nam tempor ullamcorper metus sed condimentum. Suspendisse vel viverra velit. Vivamus magna dui, maximus tristique lacus in, finibus ullamcorper odio. Fusce convallis fermentum tortor vel consequat. Aenean nec lacus ac erat ultrices condimentum. Praesent imperdiet lectus ut porta luctus. Proin at tempus turpis. Quisque rutrum eget libero in fringilla. Proin ullamcorper et est aliquet pretium. Proin hendrerit viverra risus, fringilla tristique mauris tempor lobortis. Nam faucibus euismod mattis."
    );
    const imageUrl = text("Image URL", "/image.jpg");
    const type = selectV2("Type", types, Object.values(types)[0]);

    return (
      <ImageCard vertical imageUrl={imageUrl} type={type}>
        {content}
      </ImageCard>
    );
  });
