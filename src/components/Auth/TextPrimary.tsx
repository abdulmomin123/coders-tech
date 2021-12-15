import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.p`
  font-size: 1.4rem;
  padding: 2.2rem 0;
  color: #4d4d4d;
`;

const TextPrimary: FC = ({ children }) => <Root>{children}</Root>;

export default TextPrimary;
