import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from 'phosphor-react';

import IconButton from './IconButton';

export default {
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon: User,
  onClick: console.log,
};