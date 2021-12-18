import { FC } from 'react';
import styled from 'styled-components';
import LoadingAnimation from '../LoadingAnimation';

const Root = styled.button`
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  background: #5aac44;
  padding: 1rem 1.5rem;
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
    {isDisabled ? <LoadingAnimation /> : children}
  </Root>
);

export default SubmitButton;
