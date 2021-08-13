import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from '../components/BreadCrumb';

export default{
    title: 'Inventory App Demo/BreadCrumb',
    component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb />

export const BreadCrumb = Template.bind({});
BreadCrumb.args = {};