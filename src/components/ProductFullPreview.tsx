import Link from 'next/link';
import Image from 'next/image';
import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { FullProduct } from '../Types';
import { camelCaseToNormal, capitalize, formatPrice } from '../helpers';
import Feedback from './Feedback';
import {
  CartContext,
  CartItemsContext,
  CartItemsSetter,
} from '../contexts/Cart';

const Root = styled.div`
  max-width: 115rem;
  margin: 0 auto;
`;

const TopNameAndCategory = styled.div`
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  margin-bottom: 1rem;
  color: #757575;
`;

const CategoryLink = styled.a`
  color: #1890a8;
`;

const Chevron = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: currentColor;
  margin: 0 1rem;
`;

const DetailsSection = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 8rem;
  padding: 3rem;
  margin-bottom: 3rem;
  background: #fff;
  border-radius: 3px;
`;

const ImagesSide = styled.div`
  max-width: 33rem;
`;

const ImageContainer = styled.div`
  width: 33rem;
  height: 33rem;
  margin-bottom: 1.5rem;
  cursor: zoom-in;
`;

const Thumbnails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThumbnailContainer = styled.div`
  width: 5.5em;
  height: 5.5rem;
  border: 1px solid #dadada;
  border-radius: 2px;
  transition: border 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid #f57224;
  }
`;

const InfoSide = styled.div`
  display: grid;
  grid-template-rows: repeat(4, max-content) 1fr;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #212121;
`;

const TotalRatings = styled.div`
  font-size: 1.7rem;
  margin-bottom: 4rem;
`;

const TotalRatingsLink = styled.a`
  color: #1d899e;
  cursor: pointer;
`;

const PriceDetails = styled.div``;

const Price = styled.p`
  font-size: 3.3rem;
  color: #f57224;
  margin-bottom: 1rem;
`;

const OldPriceContainer = styled.div`
  font-size: 1.7rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #9e9e9e;
`;

const DiscountPercent = styled.span`
  color: #212121;
`;

const QuantityContainer = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-top: 6rem;
  color: #757575;
`;

const QuantityButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 2rem;
  margin-left: 4rem;
`;

const QuantityBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
`;

const QuantityIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  fill: #777676;
`;

const QuantityCount = styled.span`
  color: #212121;
  font-weight: 500;
`;

const ActionButtons = styled.div`
  align-self: end;
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
`;

const ActionBtn = styled.button<{ bg: string; bgHover: string }>`
  font-size: 1.9rem;
  font-weight: 500;
  padding: 1.5rem 0;
  color: #fff;
  background: ${({ bg }) => bg};
  border-radius: 3px;
  transition: background 0.2s;

  &:hover {
    background: ${({ bgHover }) => bgHover};
  }
`;

const DescriptionSection = styled.section`
  margin-bottom: 3rem;
  background: #fff;
  border-radius: 3px;
`;

const SectionTitle = styled.h2`
  font-size: 1.9rem;
  padding: 2rem 3rem;
  color: #212121;
  background: #fafafa;
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2;
  padding: 1rem 3rem 3rem 3rem;
`;

const ReviewsSection = styled.section`
  margin-bottom: 3rem;
  background: #fff;
  border-radius: 3px;
`;

const Container = styled.div`
  padding: 3rem;
`;

const ReviewButtons = styled.div``;

const ReviewBtn = styled.button``;

const Ratings = styled.div``;

const RatingsLeft = styled.div``;

const RatingsRight = styled.div``;

const Rating = styled.span``;

const RatingOutOf = styled.span``;

const RatingGroup = styled.div``;

const Feedbacks = styled.div``;

interface Props {
  product: FullProduct;
}

const ProductFullPreview: FC<Props> = ({
  product: { id, category, name, price, oldPrice, thumbnail },
}) => {
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(CartItemsSetter);
  const { setIsCartOpen, hasCartOpened, setHasCartOpened } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <Root>
      {/* Category and product name */}
      <TopNameAndCategory>
        {/* Category name */}
        <Link href={`/${category}`} passHref>
          <CategoryLink>{capitalize(category)}</CategoryLink>
        </Link>

        {/* Chevron right */}
        <Chevron>
          <use href="/chevron-right.svg#icon" />
        </Chevron>

        {/* Product name */}
        {name}
      </TopNameAndCategory>

      {/* Product main details */}
      <DetailsSection>
        {/* Left side */}
        <ImagesSide>
          {/* Currently selected image */}
          <ImageContainer>
            <Image
              src="/test-prod-img.webp"
              alt={name}
              width={330}
              height={330}
              layout="responsive"
            />
          </ImageContainer>

          {/* Thumbnails */}
          <Thumbnails>
            <ThumbnailContainer>
              <Image
                src="/test-prod-img.webp"
                alt={`${name} small size`}
                width={55}
                height={55}
                layout="responsive"
              />
            </ThumbnailContainer>

            <ThumbnailContainer>
              <Image
                src="/test-prod-img.webp"
                alt={`${name} small size`}
                width={55}
                height={55}
                layout="responsive"
              />
            </ThumbnailContainer>

            <ThumbnailContainer>
              <Image
                src="/test-prod-img.webp"
                alt={`${name} small size`}
                width={55}
                height={55}
                layout="responsive"
              />
            </ThumbnailContainer>

            <ThumbnailContainer>
              <Image
                src="/test-prod-img.webp"
                alt={`${name} small size`}
                width={55}
                height={55}
                layout="responsive"
              />
            </ThumbnailContainer>
          </Thumbnails>
        </ImagesSide>

        {/* Right side */}
        <InfoSide>
          {/* Name */}
          <Name>{name}</Name>

          <TotalRatings>
            {/* Stars */}
            starts &nbsp;
            {/* Ratings count */}
            <Link href="#ratings" passHref>
              <TotalRatingsLink>221 ratings</TotalRatingsLink>
            </Link>
          </TotalRatings>

          <PriceDetails>
            {/* Price */}
            <Price>{formatPrice(price)}</Price>

            {/* Discounted price */}
            {oldPrice && (
              <OldPriceContainer>
                <OldPrice>{formatPrice(oldPrice)}</OldPrice>
                <DiscountPercent>
                  &nbsp;-{((oldPrice - price) * 100) / 100}%
                </DiscountPercent>
              </OldPriceContainer>
            )}
          </PriceDetails>

          <QuantityContainer>
            Quantity:
            <QuantityButtons>
              {/* Decrease button */}
              <QuantityBtn
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <QuantityIcon>
                  <use href="/minus.svg#icon" />
                </QuantityIcon>
              </QuantityBtn>

              {/* current quantity */}
              <QuantityCount>{quantity}</QuantityCount>

              {/* Increase button */}
              <QuantityBtn
                disabled={quantity >= 100}
                onClick={() => setQuantity(quantity + 1)}
              >
                <QuantityIcon>
                  <use href="/plus.svg#icon" />
                </QuantityIcon>
              </QuantityBtn>
            </QuantityButtons>
          </QuantityContainer>

          {/* Action buttons */}
          <ActionButtons>
            {/* Buy now button */}
            <ActionBtn bg="#2abbe8" bgHover="#26abd4">
              Buy Now
            </ActionBtn>

            {/* Add to cart button */}
            <ActionBtn
              bg="#f57224"
              bgHover="#d0611e"
              onClick={() => {
                const newCartItems = [...cartItems];
                const existingProduct = newCartItems.find(
                  ({ id: prodId }) => prodId === id
                );

                if (!hasCartOpened) setIsCartOpen(true), setHasCartOpened(true);
                if (existingProduct) {
                  if (existingProduct.quantity >= 100) return;

                  existingProduct.quantity + quantity > 100
                    ? (existingProduct.quantity = 100)
                    : (existingProduct.quantity += quantity);
                  return setCartItems(newCartItems);
                }

                setCartItems([
                  ...cartItems,
                  {
                    id,
                    name,
                    category: camelCaseToNormal(category, '-', false),
                    price,
                    thumbnail,
                    quantity: quantity,
                  },
                ]);
              }}
            >
              Add to Cart
            </ActionBtn>
          </ActionButtons>
        </InfoSide>
      </DetailsSection>

      {/* Description */}
      <DescriptionSection>
        <SectionTitle>Product details of {name}</SectionTitle>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Description>
      </DescriptionSection>

      {/* Reviews and questions */}
      <ReviewsSection id="ratings">
        <SectionTitle>Ratings & Reviews of {name}</SectionTitle>
        <Container>
          <ReviewButtons>
            {/* Reviews */}
            <ReviewBtn>Reviews</ReviewBtn>

            {/* Questions */}
            <ReviewBtn>Questions</ReviewBtn>
          </ReviewButtons>

          {/* Ratings */}
          <Ratings>
            {/* Left side */}
            <RatingsLeft>
              <div>
                <Rating>4.8</Rating>

                <RatingOutOf>/5</RatingOutOf>
              </div>
              {/* Stars */}
              {/* Total ratings */}
              243 Ratings
            </RatingsLeft>

            {/* Right side */}
            <RatingsRight>
              <RatingGroup>
                {/* Stars */}

                {/* Progress bar */}

                {/* Ratings count */}
              </RatingGroup>
            </RatingsRight>
          </Ratings>

          {/* Feedbacks */}
          <Feedbacks>
            <Feedback />
          </Feedbacks>
        </Container>
      </ReviewsSection>
    </Root>
  );
};

export default ProductFullPreview;
