import { Meta, Story } from '@storybook/react';
import { Login, LoginProps } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';

export default {
  title: 'Pages/Login',
  component: Login,
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Loading = Template.bind({});
Loading.args = {
  ...populatedProps,
  isLoading: true,
};

export const InvalidLogin = Template.bind({});
InvalidLogin.args = {
  ...populatedProps,
  errorMessage: words.errorMessage,
};
