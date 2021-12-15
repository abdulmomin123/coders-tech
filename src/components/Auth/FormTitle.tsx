import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.h1`
  font-size: 2rem;
  padding: 1rem 0 3rem 0;
  color: #5e6c84;
`;

const FormTitle: FC = ({ children }) => <Root>{children}</Root>;

export default FormTitle;
