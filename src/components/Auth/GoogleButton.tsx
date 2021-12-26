import { FC } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../styles/utils';
import LoadingAnimation from '../LoadingAnimation';

const Root = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  ${flexCenter}
  padding: 1rem;
  color: #505f79;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;

  &:hover {
    background: #f9fafc;
  }

  &:active {
    background: #eee;
    border: 2px solid #cdd2d4;
  }
`;

const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

interface Props {
  isDisabled: boolean;
  handleClick: () => void;
}

const GoogleButton: FC<Props> = ({ isDisabled, handleClick }) => (
  <Root disabled={isDisabled} onClick={handleClick}>
    {isDisabled ? (
      <LoadingAnimation bg="#a1a1a1" />
    ) : (
      <>
        {/* Icon */}
        <Icon>
          <use href="/google.svg#icon" />
        </Icon>
        {/* Text */}
        Continue with Google
      </>
    )}
  </Root>
);

export default GoogleButton;
