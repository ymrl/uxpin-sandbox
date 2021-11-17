import * as React from 'react';
import { Card } from '../Card'

export default {
  title: 'Components/Card',
  component: Card
};

export const CardComponent = (args: Parameters<typeof Card>[0]):JSX.Element => <Card {...args} />
CardComponent.args = {
  children: 'aaa',
}

