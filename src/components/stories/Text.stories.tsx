import * as React from 'react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text
};

export const TextComponent = (args: Parameters<typeof Text>[0]):JSX.Element => <Text {...args} />
TextComponent.args = {
  children: 'aaa',
}

