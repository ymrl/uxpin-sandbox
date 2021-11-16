import * as React from 'react';
import styled from 'styled-components/macro';

export const Button = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    css={{
      background: '#fff',
      '&:hover': {
        background: '#f00'
      }
    }}
  >
    {children}
  </button>
);
