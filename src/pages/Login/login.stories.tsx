import { Meta, Story } from '@storybook/react';
import { Login, LoginProps } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';

export default {
  title: 'Login',
  component: Login,
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Error = Template.bind({});
Error.args = {
  ...populatedProps,
  errorMessage: words.errorMessage,
};
