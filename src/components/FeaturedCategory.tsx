import { FC } from 'react';
import styled from 'styled-components';
import ProductPreview from './ProductPreview';
import ViewNowBtn from './ViewNowBtn';

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.2fr;
  gap: 3rem;
  padding: 6rem 0;

  &:not(:last-of-type) {
    border-bottom: 2px solid #ebebeb;
  }
`;

const LeftSide = styled.div``;

const Name = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #202600;
`;

const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 4rem;
  color: #828282;
`;

const ProductGrid = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: auto;
`;

const PaginationButton = styled.button<{ isLeft?: boolean }>`
  position: absolute;
  top: 17.5rem;
  ${({ isLeft }) => (isLeft ? 'left: 0;' : 'right: 0;')}
  padding: 2.5rem .8rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  transform: translateY(-50%);
  transition: background 0.2s;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ChevronIcon = styled.svg<{ isLeft?: boolean }>`
  width: 2rem;
  height: 2rem;
  fill: #fff;
  ${({ isLeft }) => isLeft && 'transform: rotate(180deg);'};
`;

interface Props {
  name: string;
  description: string;
}

const FeaturedCategory: FC<Props> = ({ name, description }) => {
  return (
    <Root>
      {/* Left side */}
      <LeftSide>
        {/* Name */}
        <Name>{name}</Name>

        {/* Description */}
        <Description>{description}</Description>

        {/* View now button */}
        <ViewNowBtn href={`/${name.toLowerCase()}`}>Shop Now</ViewNowBtn>
      </LeftSide>

      {/* Products grid */}
      <ProductGrid>
        {/* Left button */}
        <PaginationButton isLeft={true}>
          <ChevronIcon isLeft={true}>
            <use href="chevron-right.svg#icon" />
          </ChevronIcon>
        </PaginationButton>

        {/* Product previews */}
        <ProductPreview
          name="Buckle Wrap Wooden Table"
          images={['/p2.jpg', '/p1.jpg', 'p3.jpg']}
          href="/test/test"
          price={52}
        />
        <ProductPreview
          name="Wooden Teapot Via Jar"
          images={['/p1.jpg']}
          href="/test/test"
          price={45}
          discountedPrice={65}
        />
        <ProductPreview
          name="Wooden Bluetooth Speaker"
          images={['/p3.jpg']}
          href="/test/test"
          price={36}
        />

        {/* Right button */}
        <PaginationButton>
          <ChevronIcon>
            <use href="chevron-right.svg#icon" />
          </ChevronIcon>
        </PaginationButton>
      </ProductGrid>
    </Root>
  );
};

export default FeaturedCategory;
