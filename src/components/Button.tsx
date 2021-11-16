import * as React from 'react';
import {} from 'styled-components/macro';

import {ColorGY7, ColorP1, ColorP5, ColorP7, ColorS5, ColorW, FontFamily} from '../constants';

export const Button = ({
  children,
  appearance
}: {
  children: React.ReactNode;
  appearance?: 'primary'| 'secondary'
}): JSX.Element => (
  <button
    css={{
      height: `${44 / 16}rem`,
      minWidth: `${2 * 44 / 16}rem`,
      borderRadius: `${44 / 16 / 2}rem`,
      border: `1px solid ${appearance === 'primary' ? ColorP5 : ColorS5}`,
      backgroundColor: appearance === 'primary' ? ColorP5 : ColorW,
      color: appearance === 'primary' ? ColorW : ColorGY7,
      fontFamily: FontFamily,
      fontSize: '1rem',
      fontWeight: 'bold',
      padding: '0 1rem',
      transitionDuration: '0.4s',
      transitionProperty: 'color, background-color, border-color',
      '&:hover': {
        backgroundColor: appearance === 'primary' ? ColorP7 : ColorP1,
        borderColor: appearance === 'primary' ? ColorP7 : ColorP5,
        color: appearance === 'primary' ? ColorW : ColorP5
      }
    }}
  >
    {children}
  </button>
);
