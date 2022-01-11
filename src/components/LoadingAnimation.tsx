import { FC } from 'react';
import styled, { css } from 'styled-components';

const left = css`
  left: 8px;
`;

const scale0 = css`
  transform: scale(0);
`;

const scale1 = css`
  transform: scale(1);
`;

const Root = styled.div<{ bg?: string; scale?: number }>`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 1.3rem;
  transform: ${({ scale }) => (scale ? `scale(${scale})` : 'none')};

  & div {
    position: absolute;
    top: 0;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background: ${({ bg }) => (bg ? bg : '#fff')};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    ${left}
    animation: lds-ellipsis1 0.6s infinite;
  }

  & div:nth-child(2) {
    ${left}
    animation: lds-ellipsis2 0.6s infinite;
  }

  & div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  & div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      ${scale0}
    }

    100% {
      ${scale1}
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      ${scale1}
    }

    100% {
      ${scale0}
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(24px, 0);
    }
  }
`;

interface Props {
  bg?: string;
  scale?: number;
}

const LoadingAnimation: FC<Props> = ({ bg, scale }) => {
  return (
    <Root bg={bg} scale={scale}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Root>
  );
};

export default LoadingAnimation;
