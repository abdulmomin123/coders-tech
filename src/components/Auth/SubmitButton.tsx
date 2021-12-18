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

interface Props {
  isDisabled: boolean;
}

const SubmitButton: FC<Props> = ({ isDisabled, children }) => (
  <Root type="submit" disabled={isDisabled}>
    {children}
  </Root>
);

export default SubmitButton;
