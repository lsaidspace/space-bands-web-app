import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from 'phosphor-react';

import Button from './Button';

export default {
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'normal'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  onClick: console.log,
  children: 'Llamar al 911',
  size: 'normal',
  disabled: false,
};

export const WithIconAndBg = Template.bind({});

WithIconAndBg.args = {
  icon: User,
  onClick: console.log,
  children: 'Go to profile',
  size: 'normal',
  disabled: false,
  className: 'bg-slate-100 hover:bg-slate-200',
};

export const Border = Template.bind({});

Border.args = {
  icon: User,
  onClick: console.log,
  children: 'Go to profile',
  size: 'normal',
  disabled: false,
  className: 'border hover:border-gray-400',
};