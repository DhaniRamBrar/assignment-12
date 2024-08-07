import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StyledLabel from './Label.tsx';
import { StyledLabelProps } from "./Label.types.tsx";
export default {
  title: 'StyledLabel',
  component: StyledLabel,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { 
      control: { type: 'select' },
      options: ['normal', 'bold', 'bolder', 'lighter'],
    },
    textTransform: {
      control: { type: 'select' },
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
    },
    underline: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<StyledLabelProps> = (args) => <StyledLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label',
  color: "#333333",
  fontSize: "18px",
};

export const BoldUppercase = Template.bind({});
BoldUppercase.args = {
  text: 'Label',
  color: "#007BFF",
  fontSize: "20px",
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

export const UnderlinedLabel = Template.bind({});
UnderlinedLabel.args = {
  text: 'Label',
  fontSize: "16px",
  underline: true,
};





