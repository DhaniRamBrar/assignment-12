import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './DropDown.tsx';
import { DropdownProps } from './DropDown.types';


export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    multiSelect: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const EnhancedDropdown = Template.bind({});
EnhancedDropdown.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  placeholder: 'Select options',
  multiSelect: true,
  disabled: false,
  onChange: (selectedOption) => console.log('Selected option:', selectedOption),
};


export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  ...EnhancedDropdown.args,
  disabled: true,
};





