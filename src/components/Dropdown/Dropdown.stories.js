import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    labelVisibility: { control: 'radio', options: ['Visible', 'Hidden'] },
    status: { control: 'radio', options: ['Unfilled', 'Filled', 'Disabled', 'Error'] },
    labelIconVisibility: { control: 'radio', options: ['Visible', 'Hidden'] },
    leftIconVisibility: { control: 'radio', options: ['Visible', 'Hidden'] },
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    text: { control: 'text' },
    type: { control: 'radio', options: ['SingleNoIcon', 'SingleRadio', 'Multi'] },
    activeItemIndex: { control: 'number' },
    items: { control: 'array' }
  }
} as Meta;

const Template: Story<any> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Dropdown Label',
  labelVisibility: 'Visible',
  status: 'Unfilled',
  labelIconVisibility: 'Hidden',
  leftIconVisibility: 'Visible',
  helperText: 'This is a helper text.',
  required: false,
  text: 'Select an item',
  type: 'SingleNoIcon',
  activeItemIndex: -1,
  items: ['Option 1', 'Option 2', 'Option 3']
};
