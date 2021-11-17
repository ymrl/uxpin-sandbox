import * as React from 'react';
import { Headline } from '../Headline';

export default {
  title: 'Components/Headline',
  component: Headline
};

export const H1 = (args: Parameters<typeof Headline>[0]):JSX.Element => <Headline {...args} />
H1.args = {
  children: 'H1',
  level: 1
}


export const H2 = (args: Parameters<typeof Headline>[0]):JSX.Element => <Headline {...args} />
H2.args = {
  children: 'H2',
  level: 2
}

export const H3 = (args: Parameters<typeof Headline>[0]):JSX.Element => <Headline {...args} />
H3.args = {
  children: 'H3',
  level: 3
}
