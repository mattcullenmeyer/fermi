import { Meta, Story } from '@storybook/react';
import { LogoHeading, LogoHeadingProps } from './index';

export default {
  title: 'components/LogoHeading',
  component: LogoHeading,
} as Meta;

const Template: Story<LogoHeadingProps> = (args) => <LogoHeading {...args} />;

export const Default = Template.bind({});
