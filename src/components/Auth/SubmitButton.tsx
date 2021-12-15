import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.button`
  font-size: 1.7rem;
  font-weight: 500;
  background: #5aac44;
  padding: 0.8rem 1.5rem;
  color: #fff;
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: #61bd4f;
  }
`;

const SubmitButton: FC = ({ children }) => (
  <Root type="submit">{children}</Root>
);

export default SubmitButton;
