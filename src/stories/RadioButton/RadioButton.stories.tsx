import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomRadioButton from './RadioButton.tsx';
import { RadioButtonProps } from "./RadioButton.types"

export default {
  title: 'CustomRadioButton',
  component: CustomRadioButton,
  argTypes: {
    selectedColor: { control: 'color' },
    hoverColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <CustomRadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ],
  name: "customRadioGroup",
  selectedColor: '#4CAF50',
  hoverColor: '#8BC34A',
  disabled: false,
  onChange: (selectedValue: string) => console.log('Selected:', selectedValue),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};
