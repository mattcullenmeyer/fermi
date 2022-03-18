import { Meta, Story } from '@storybook/react';
import { Signup, SignupProps } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';

export default {
  title: 'Signup',
  component: Signup,
} as Meta;

const Template: Story<SignupProps> = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Loading = Template.bind({});
Loading.args = {
  ...populatedProps,
  isLoading: true,
};

export const EmailError = Template.bind({});
EmailError.args = {
  ...populatedProps,
  emailErrorMessage: words.emailUnavailable,
};

export const PasswordError = Template.bind({});
PasswordError.args = {
  ...populatedProps,
  passwordErrorMessage: words.invalidPassword,
};

export const SignupError = Template.bind({});
SignupError.args = {
  ...populatedProps,
  signupErrorMessage: words.signupErrorMessage,
};
