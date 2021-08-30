import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  margin-top: 2rem;
  overflow: hidden;
`;

const SlidesContainer = styled.div<{
  currentImg: number;
  shouldTransition: boolean;
}>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  transform: translateX(
    ${({ currentImg }) => `${-((currentImg + 1 - 1) * 100)}%`}
  );
  transition: ${({ shouldTransition }) =>
    shouldTransition ? 'transform 0.4s ease-in-out' : 'none'};
`;

const Slide = styled.div`
  background: #ddd;
`;

const ImageSlideshow = () => {
  // State
  const [currentImg, setCurrentImg] = useState(1);
  const [shouldTransition, setShouldTransition] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const images = ['/p1.jpg', '/p2.jpg', '/p3.jpg', '/p4.jpg', '/p5.jpg'];

  useEffect(() => setShouldTransition(true), [shouldTransition]);

  return (
    <Root>
      <SlidesContainer
        currentImg={currentImg}
        shouldTransition={shouldTransition}
        onTransitionEnd={() => {
          if (currentImg > images.length) {
            setShouldTransition(false);
            setCurrentImg(1);
          }
          if (currentImg < 1) {
            setShouldTransition(false);
            setCurrentImg(images.length);
          }
        }}
      >
        <Slide>
          <Image src="/p5.jpg" width={1200} height={429} alt="test" />
        </Slide>
        {images.map(img => (
          <Slide key={img}>
            <Image src={img} width={1200} height={429} alt="test" />
          </Slide>
        ))}
        <Slide>
          <Image src="/p1.jpg" width={1200} height={429} alt="test" />
        </Slide>
      </SlidesContainer>

      <button
        onClick={() => {
          if (currentImg < 1) return;
          setCurrentImg(currentImg - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (currentImg > images.length) return;
          setCurrentImg(currentImg + 1);
        }}
      >
        Next
      </button>
    </Root>
  );
};

export default ImageSlideshow;
