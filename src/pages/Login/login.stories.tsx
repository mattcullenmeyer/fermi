import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Login, LoginProps } from './index';
import { words } from './words';

export default {
  title: 'Login',
  component: Login,
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

const defaultProps: LoginProps = {
  email: 'test@email.com',
  password: 'testing123456789',
  errorMessage: '',
  onEmailChange: () => {},
  onPasswordChange: () => {},
  onFormSubmit: () => {},
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  errorMessage: words.errorMessage,
};
