import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { SLIDES } from '../constants';

const Root = styled.div`
  position: relative;
  margin-bottom: 3rem;
  cursor: pointer;
  overflow: hidden;
`;

const displayGrid = css`
  display: grid;
`;

const SlidesContainer = styled.div<{
  currentImg: number;
  shouldTransition: boolean;
}>`
  ${displayGrid}
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  transform: translateX(${({ currentImg }) => `${-(currentImg * 100)}%`});
  transition: ${({ shouldTransition }) =>
    shouldTransition ? 'transform 0.8s ease-in-out' : 'none'};
`;

const ButtonsContainer = styled.div`
  font-size: 1.7rem;
  font-weight: 300;
  position: absolute;
  bottom: 15%;
  left: 15%;
  ${displayGrid}
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
`;

const ImageSlideshow = () => {
  // State
  const [currentImg, setCurrentImg] = useState(1);
  const [shouldTransition, setShouldTransition] = useState(true);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [isVisible, setIsVisible] = useState(true);

  const stopSlideshow = () => clearTimeout(timer!);
  const startSlideshow = () => {
    stopSlideshow();
    setTimer(setTimeout(() => setCurrentImg(currentImg + 1), 4000));
  };

  // Starting the timer for the first time, and stopping the timer when the user switches tabs
  useEffect(() => {
    startSlideshow();

    const setVisibility = () => {
      if (document.hidden) return setIsVisible(false);

      setIsVisible(true);
    };

    document.addEventListener('visibilitychange', setVisibility);
    return () =>
      document.removeEventListener('visibilitychange', setVisibility);
  }, []);

  useEffect(() => startSlideshow(), [currentImg]);

  useEffect(() => setShouldTransition(true), [shouldTransition]);

  useEffect(() => {
    if (!isVisible) return stopSlideshow();

    startSlideshow();
  }, [isVisible]);

  // Stopping the slideshow
  useEffect(() => () => stopSlideshow());

  return (
    <Root
      onMouseOver={() => stopSlideshow()}
      onMouseLeave={() => startSlideshow()}
    >
      <SlidesContainer
        currentImg={currentImg}
        shouldTransition={shouldTransition}
        onTransitionEnd={() => {
          if (currentImg > SLIDES.length) {
            setShouldTransition(false);
            setCurrentImg(1);
          }

          if (currentImg < 1) {
            setShouldTransition(false);
            setCurrentImg(SLIDES.length);
          }
        }}
      >
        {/* Last image */}
        <Link
          href={`/${SLIDES[SLIDES.length - 1].category}/${
            SLIDES[SLIDES.length - 1].productId
          }`}
        >
          <a>
            <Image
              src={SLIDES[SLIDES.length - 1].img}
              width={1520}
              height={600}
              alt={SLIDES[SLIDES.length - 1].name}
            />
          </a>
        </Link>

        {/* All images */}
        {SLIDES.map(({ name, category, productId, img }) => (
          <Link href={`/${category}/${productId}`} key={category}>
            <a>
              <Image src={img} width={1520} height={600} alt={name} />
            </a>
          </Link>
        ))}

        {/* First image */}
        <Link href={`/${SLIDES[0].category}/${SLIDES[0].productId}`}>
          <a>
            <Image
              src={SLIDES[0].img}
              width={1520}
              height={600}
              alt={SLIDES[0].name}
            />
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

        <span>
          {currentImg > SLIDES.length
            ? SLIDES.length
            : currentImg < 1
            ? 1
            : currentImg}
        </span>

        <Button
          onClick={() => {
            if (currentImg > SLIDES.length) return;
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
