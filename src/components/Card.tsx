import * as React from 'react';
import {} from 'styled-components/macro';
import { ColorW } from '../constants';

export const Card = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <div
    css={{
      padding: '1rem',
      boxShadow: ' 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)',
      borderRadius: '0.5rem',
      background: ColorW
    }}
  >
    {children}
  </div>
);
