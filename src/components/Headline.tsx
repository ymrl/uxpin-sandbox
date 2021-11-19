import * as React from 'react';
import {} from 'styled-components/macro';
import { CSSProp } from 'styled-components';
import { ColorGY7, FontFamily } from '../constants';

export const Headline = ({
  children,
  level = 1,
}: {
  children: React.ReactNode;
  level: 1 | 2 | 3;
}): JSX.Element => {
  const css: CSSProp = {
    fontFamily: FontFamily,
    color: ColorGY7,
    fontWeight: 'bold',
    lineHeight: 1.5,
  };

  return level === 1 ? (
    <h1 css={{ ...css, fontSize: '3rem' }}>{children}</h1>
  ) : level === 2 ? (
    <h2 css={{ ...css, fontSize: '2rem' }}>{children}</h2>
  ) : (
    <h3 css={{ ...css, fontSize: '1.5rem' }}>{children}</h3>
  );
};
