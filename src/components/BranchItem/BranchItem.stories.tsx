import { ComponentStory, ComponentMeta } from '@storybook/react';

import BranchItem from './BranchItem';

export default {
  component: BranchItem,
} as ComponentMeta<typeof BranchItem>;

const Template: ComponentStory<typeof BranchItem> = (args) => <BranchItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: '123',
  name: 'Artigas 341',
  onlineStatus: {
    online: true,
    offlineAlert: false,
  },
  bpmAverage: 80
};