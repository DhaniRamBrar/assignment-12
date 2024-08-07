import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card.tsx';
import { CardProps } from './Card.types';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'text' },
    alignText: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
    hoverEffect: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const CardInterative = Template.bind({});
CardInterative.args = {
  title: 'Interactive Card',
  content: 'This is an interactive card. It can contain images, align text, and even have a hover effect!',
  hoverEffect: true,
  backgroundColor: '#f0f0f0',
};
