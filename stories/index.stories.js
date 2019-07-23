import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import HeadingText from "../src/components/HeadingText";
import HelperText from "../src/components/HelperText";
import Avatar from "../src/components/Avatar";
import BannerImage from "../src/components/BannerImage";

storiesOf("Typography", module)
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

storiesOf("Images", module)
  .add("Avatar", () => (
    <div>
      <div>
        <Avatar src="https://via.placeholder.com/150" alt="et-logo" />
        <Avatar
          src="https://via.placeholder.com/150"
          alt="et-logo"
          height={"40px"}
          width={"40px"}
          borderRadius={"40px"}
        />
      </div>
      <p>
        Usually, we need circular image for purpose like user profile, or
        article image. You can use this Avatar component. It has{" "}
        <code>25px</code> as height, width and border-radius. If you want
        different size, just pass it with :{" "}
        <code>height, width or borderRadius</code> props.
      </p>
    </div>
  ))
  .add("Banner", () => (
    <div>
      <div style={{ height: 30, width: 100 }}>
        <BannerImage
          src="https://via.placeholder.com/100"
          alt="et-banner"
          borderRadius={"0px"}
        />
      </div>
      <div style={{ marginTop: 8, height: 100, width: 200 }}>
        <BannerImage src="https://via.placeholder.com/200" alt="et-banner" />
      </div>
      <p>
        BannerImage component can be used for carousel image. It will fill the
        container div, because it's height and width has 100% value. You can
        also pass <code>borderRadius</code> props too.
      </p>
    </div>
  ));
