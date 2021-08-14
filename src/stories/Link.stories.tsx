import React from "react";

import { Link } from "../components/Link";
import { StoryLinkWrapper } from "../components/StoryLinkWrapper";

export default {
    title: 'Inventory App Demo/Link',
    component: Link,
  };

export const AllLinks = (args: any) =>(
    <div>
    <Link secondary href="https://storybook.js.org/tutorials/">
      Secondary
    </Link>
    <br />
    <Link tertiary href="https://storybook.js.org/tutorials/">
    tertiary
    </Link>
    <br />
    <Link tertiary LinkWrapper={StoryLinkWrapper} href="http://storybook.js.org">
      has a LinkWrapper like GatsbyLink or NextLink
    </Link>
    {/* gatsby and styled-components don't work nicely together  */}
    {/* eslint-disable-next-line */}
    </div>
);