import * as React from 'react';
import { Button } from '../Button';

export default {
  title: 'Components/Button',
  component: Button
};

export const ButtonPrimary = (args: Parameters<typeof Button>[0]):JSX.Element => <Button {...args} />
ButtonPrimary.args = {
  children: 'push me',
  appearance: 'primary'
}
export const ButtonSecondary = (args: Parameters<typeof Button>[0]):JSX.Element => <Button {...args} />
ButtonSecondary.args = {
  children: 'push me',
  appearance: 'secondary'
}

