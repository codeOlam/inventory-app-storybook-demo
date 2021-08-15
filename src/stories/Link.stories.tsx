import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from "../components/Link";


export default{
    title: 'Inventory App Demo/Link',
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}/>

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  content: 'primary Link'
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
  primary: false,
  content: 'secondary Link'
};

export const IconLink = Template.bind({});
IconLink.args = {
  hasIcon: true,
  content: 'Link with Icon'
};
