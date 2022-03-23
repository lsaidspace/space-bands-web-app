import { ComponentStory, ComponentMeta } from '@storybook/react';

import Bpm from './Bpm';

export default {
  component: Bpm,
} as ComponentMeta<typeof Bpm>;

const Template: ComponentStory<typeof Bpm> = (args) => <Bpm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: 40
};