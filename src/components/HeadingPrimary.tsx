import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.h1`
  margin-bottom: 3rem;
  color: #444;
`;

const HeadingPrimary: FC = ({ children }) => <Root>{children}</Root>;

export default HeadingPrimary;
