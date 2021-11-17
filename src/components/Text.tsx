import * as React from 'react';
import {} from 'styled-components/macro';
import { ColorGY7, FontFamily } from '../constants';

export const Text = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <span
    css={{
      fontFamily: FontFamily,
      lineHeight: 1.5,
      color: ColorGY7
    }}
  >
    {children}
  </span>
);
