import { CSSProp } from 'styled-components';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Attributes {
    css?: CSSProp;
  }
}
