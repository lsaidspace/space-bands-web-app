import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from 'phosphor-react';

import BpmChart from './BpmChart';

export default {
  component: BpmChart,
} as ComponentMeta<typeof BpmChart>;

const Template: ComponentStory<typeof BpmChart> = (args) => <BpmChart {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  data: [
    { name: '0', uv: 78, pv: 80 },
    { name: '1', uv: 80, pv: 90 },
    { name: '2', uv: 82, pv: 92 },
    { name: '3', uv: 80, pv: 88 },
    { name: '4', uv: 78, pv: 90 },
    { name: '5', uv: 85, pv: 95 },
    { name: '6', uv: 85, pv: 98 },
    { name: '7', uv: 87, pv: 100 },
    { name: '8', uv: 80, pv: 88 },
    { name: '9', uv: 78, pv: 90 },
    { name: '10', uv: 85, pv: 95 },
    { name: '11', uv: 85, pv: 95 },
    { name: '12', uv: 85, pv: 98 },
    { name: '13', uv: 87, pv: 100 },
  ]
};