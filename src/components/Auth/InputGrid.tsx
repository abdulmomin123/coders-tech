import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  gap: 1.8rem;
`;

const InputGrid: FC = ({ children }) => <Root>{children} </Root>;

export default InputGrid;
