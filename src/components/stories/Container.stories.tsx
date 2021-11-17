import * as React from 'react';
import { Container } from '../Container';

export default {
  title: 'Components/Container',
  component: Container
};

export const ContainerComponent = (args: Parameters<typeof Container>[0]):JSX.Element => <Container {...args} />
ContainerComponent.args = {
  children: 'aaa',
}

