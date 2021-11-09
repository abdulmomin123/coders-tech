import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  margin-top: 2rem;
  overflow: hidden;
  cursor: pointer;
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
    shouldTransition ? 'transform 0.8s ease-in-out' : 'none'};
`;

const ButtonsContainer = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  position: absolute;
  bottom: 15%;
  left: 15%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
`;

const ImageSlideshow = () => {
  // State
  const [currentImg, setCurrentImg] = useState(1);
  const [shouldTransition, setShouldTransition] = useState(true);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const clearTimer = () => {
    clearTimeout(timer!);
  };
  const initializeTimer = () => {
    setTimer(setTimeout(() => setCurrentImg(currentImg + 1), 5000));
  };

  const images = ['/p1.jpg', '/p2.jpg', '/p3.jpg', '/p4.jpg', '/p5.jpg'];

  useEffect(() => setShouldTransition(true), [shouldTransition]);

  useEffect(() => {
    clearTimer();

    initializeTimer();
  }, [currentImg]);

  return (
    <Root
      onMouseOver={() => clearTimer()}
      onMouseLeave={() => initializeTimer()}
    >
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
        {/* Last image */}
        <Link href="/product/0">
          <a>
            <Image
              src={images[images.length - 1]}
              width={1200}
              height={429}
              alt="test"
            />
          </a>
        </Link>

        {/* All images */}
        {images.map(img => (
          <Link href="/product/a" key={img}>
            <a>
              <Image src={img} width={1200} height={429} alt="test" />
            </a>
          </Link>
        ))}

        {/* First image */}
        <Link href="/product/5">
          <a>
            <Image src={images[0]} width={1200} height={429} alt="test" />
          </a>
        </Link>
      </SlidesContainer>

      <ButtonsContainer>
        <Button
          onClick={() => {
            if (currentImg < 1) return;
            setCurrentImg(currentImg - 1);
          }}
        >
          Previous
        </Button>

        <span>&nbsp; | &nbsp;</span>

        <Button
          onClick={() => {
            if (currentImg > images.length) return;
            setCurrentImg(currentImg + 1);
          }}
        >
          Next
        </Button>
      </ButtonsContainer>
    </Root>
  );
};

export default ImageSlideshow;
