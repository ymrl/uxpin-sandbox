import * as React from 'react';
import {} from 'styled-components/macro';
import { ColorS1 } from '../constants';

export const Container = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <div
    css={{
      padding: '1rem',
      backgroundColor: ColorS1
    }}
  >
    {children}
  </div>
);
