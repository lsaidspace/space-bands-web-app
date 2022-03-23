import { ComponentStory, ComponentMeta } from '@storybook/react';

import OnlineStatus from './OnlineStatus';

export default {
  component: OnlineStatus,
} as ComponentMeta<typeof OnlineStatus>;

const Template: ComponentStory<typeof OnlineStatus> = (args) => <OnlineStatus {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  online: true,
  offlineAlert: false,
};