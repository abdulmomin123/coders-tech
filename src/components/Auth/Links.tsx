import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding: 2.5rem 0 1.5rem 0;
  margin-top: 3rem;
  color: #4d4d4d;
  border-top: 1px solid #ccc;
`;

const Links: FC = ({ children }) => <Root>{children}</Root>;

export default Links;
