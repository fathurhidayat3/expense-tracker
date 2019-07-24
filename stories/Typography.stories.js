import React from "react";

import { storiesOf } from "@storybook/react";

import HeadingText from "../src/components/HeadingText";
import HelperText from "../src/components/HelperText";

export default storiesOf("Typography", module)
  .add("Heading Text", () => (
    <div>
      <HeadingText>Hello, this is H1 text</HeadingText>
      <HeadingText type={"h2"}>Hello, this is H2 text</HeadingText>
      <HeadingText type={"h3"}>Hello, this is H3 text</HeadingText>
      <HeadingText type={"h4"}>Hello, this is H4 text</HeadingText>
      <HeadingText type={"h5"}>Hello, this is H5 text</HeadingText>
      <p>
        Heading text used for title or preface of article. With this component
        you able to wrap your text and select it's size using <code>type</code>{" "}
        props. When there's no props, it will automatically set to h1.
      </p>
    </div>
  ))
  .add("Helper Text", () => (
    <div>
      <HelperText>Use me for additional text</HelperText>
      <HelperText color={"blue"}>Blue label text</HelperText>
      <p>
        This text component is for labelling. You can pass <code>color</code>{" "}
        props to change it's color.
      </p>
    </div>
  ));
