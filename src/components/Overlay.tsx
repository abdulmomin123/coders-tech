import { FC } from 'react';
import styled, { css } from 'styled-components';
import { gridCenter } from '../styles/utils';
import LoadingAnimation from './LoadingAnimation';

const styles = css`
  width: 100%;
  height: 100%;
`;

const Root = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  ${styles}
  background: rgba(255, 255, 255, 0.8);
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'initial' : 'hidden')};
  transition: opacity 0.2s, opacity 0.2s;
`;

const LoaderContainer = styled.div`
  ${gridCenter}
  ${styles}
`;

interface Props {
  isLoading: boolean;
  scale?: number;
}

const Overlay: FC<Props> = ({ isLoading, scale }) => {
  return (
    <Root isVisible={isLoading}>
      <LoaderContainer>
        <LoadingAnimation bg="var(--accent-color)" scale={scale} />
      </LoaderContainer>
    </Root>
  );
};

export default Overlay;
