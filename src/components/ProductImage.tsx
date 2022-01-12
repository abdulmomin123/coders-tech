import Image from 'next/image';
import { FC, useRef } from 'react';
import styled, { css } from 'styled-components';

const Root = styled.div`
  position: relative;
  width: 33rem;
  height: 33rem;
  margin-bottom: 1.5rem;
  cursor: zoom-in;

  &:hover > div:not(:first-child) {
    visibility: initial;
  }
`;

const posAbs = css`
  position: absolute;
`;

const top = css`
  top: 0;
`;

const left = css`
  left: 0;
`;

const visibility = css`
  visibility: hidden;
`;

const Window = styled.div`
  ${posAbs}
  ${top}
  ${left}
  width: 20rem;
  height: 20rem;
  background: rgba(0, 183, 255, 0.2);
  ${visibility}
`;

const LargeImageContainer = styled.div`
  ${posAbs}
  ${top}
  left: 35rem;
  width: 45rem;
  height: 45rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.09);
  ${visibility}
  overflow: hidden;
  z-index: 2;

  img {
    ${posAbs}
    ${top}
    ${left}
    width: 75rem;
    height: 75rem;
  }
`;

interface Props {
  img: string;
  alt: string;
}

const ProductImage: FC<Props> = ({ img, alt }) => {
  const container = useRef<HTMLDivElement>(null);
  const window = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  return (
    <Root
      className="image-container"
      ref={container}
      onMouseMove={e => {
        const target = (e.target as HTMLDivElement).closest('.image-container');
        const { top, left, width, height } = target!.getBoundingClientRect();
        const windowRects = window.current!.getBoundingClientRect();
        const imageRects = image.current!.getBoundingClientRect();
        const posX = e.clientX - left;
        const posY = e.clientY - top;

        // Moving the window
        window.current!.style.top =
          Math.min(
            Math.max(posY - windowRects.height / 2, 0),
            width - windowRects.height
          ) + 'px';
        window.current!.style.left =
          Math.min(
            Math.max(posX - windowRects.width / 2, 0),
            height - windowRects.width
          ) + 'px';

        // Moving the large image
        image.current!.style.top =
          (-Math.min(
            Math.max(posY - windowRects.height / 2, 0),
            width - windowRects.height
          ) *
            imageRects.height) /
            height +
          'px';
        image.current!.style.left =
          (-Math.min(
            Math.max(posX - windowRects.width / 2, 0),
            height - windowRects.width
          ) *
            imageRects.width) /
            width +
          'px';
      }}
    >
      {/* Product image */}
      <Image
        src={`/products/${img}`}
        alt={alt}
        width={350}
        height={350}
        layout="responsive"
      />

      {/* Navigator window */}
      <Window ref={window} />

      {/* Large image */}
      <LargeImageContainer>
        <img src={`/products/${img}`} alt={alt} ref={image} />
      </LargeImageContainer>
    </Root>
  );
};

export default ProductImage;
