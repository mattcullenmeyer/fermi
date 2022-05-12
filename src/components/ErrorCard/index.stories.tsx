import { Meta, Story } from '@storybook/react';
import { ErrorCard } from './index';

export default {
  title: 'components/ErrorCard',
  component: ErrorCard,
} as Meta;

const Template: Story = () => <ErrorCard />;

export const Default = Template.bind({});
