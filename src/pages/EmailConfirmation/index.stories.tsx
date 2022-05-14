import { Meta, Story } from '@storybook/react';
import { EmailConfirmation, EmailConfirmationProps } from './index';
import { defaultProps } from './mock_data';

export default {
  title: 'Pages/EmailConfirmation',
  component: EmailConfirmation,
} as Meta;

const Template: Story<EmailConfirmationProps> = (args) => (
  <EmailConfirmation {...args} />
);

export const ConfirmEmail = Template.bind({});
ConfirmEmail.args = {
  ...defaultProps,
};

export const ConfirmEmailSuccess = Template.bind({});
ConfirmEmailSuccess.args = {
  ...defaultProps,
  networkRequestStatus: 'success',
};

export const ConfirmEmailFailure = Template.bind({});
ConfirmEmailFailure.args = {
  ...defaultProps,
  networkRequestStatus: 'failure',
};

export const ExpiredLink = Template.bind({});
ExpiredLink.args = {
  ...defaultProps,
  isExpiredLink: true,
};

export const ExpiredLinkSuccess = Template.bind({});
ExpiredLinkSuccess.args = {
  ...defaultProps,
  isExpiredLink: true,
  networkRequestStatus: 'success',
};

export const ExpiredLinkFailure = Template.bind({});
ExpiredLinkFailure.args = {
  ...defaultProps,
  isExpiredLink: true,
  networkRequestStatus: 'failure',
};

export const ExpiredLinkDisabled = Template.bind({});
ExpiredLinkDisabled.args = {
  ...defaultProps,
  isExpiredLink: true,
  isLoggedIn: false,
};
