import { Meta, Story } from '@storybook/react';
import { TopNav, TopNavProps } from './index';

export default {
  title: 'TopNav',
  component: TopNav,
} as Meta;

const Template: Story<TopNavProps> = (args) => <TopNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: false,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
};
