import { Meta, Story } from '@storybook/react';
import { ErrorCard, ErrorCardProps } from './index';

export default {
  title: 'components/ErrorCard',
  component: ErrorCard,
} as Meta;

const Template: Story<ErrorCardProps> = (args) => <ErrorCard {...args} />;

export const Default = Template.bind({});
