import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button.tsx';
import { ButtonProps } from './button.types';

export default {
  title: 'New Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  variant: 'default',
  size: 'medium',
  disabled: false,
};


export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  label: 'Outline Button',
  variant: 'outline',
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};


