import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { FullProduct } from '../Types';
import { formatPrice } from '../helpers';
import Feedback from './Feedback';

const Root = styled.div`
  max-width: 115rem;
  margin: 0 auto;
`;

const TopNameAndCategory = styled.div``;

const CategoryLink = styled.a``;

const Chevron = styled.svg``;

const TopName = styled.p``;

const DetailsSection = styled.section``;

const ImagesSide = styled.div``;

const ImageContainer = styled.div``;

const Thumbnails = styled.div``;

const ThumbnailContainer = styled.div``;

const InfoSide = styled.div``;

const Name = styled.h1``;

const TotalRatings = styled.div``;

const Price = styled.p``;

const DiscountedPrice = styled.p``;

const QuantityContainer = styled.div``;

const QuantityButtons = styled.div``;

const QuantityBtn = styled.button``;

const QuantityIcon = styled.svg``;

const ActionButtons = styled.div``;

const ActionBtn = styled.button``;

const DescriptionSection = styled.section``;

const Description = styled.p``;

const ReviewsSection = styled.section``;

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

const ProductFullPreview: FC<Props> = ({ product: { category, name } }) => {
  return (
    <Root>
      {/* Category and product name */}
      <TopNameAndCategory>
        {/* Category name */}
        <Link href={`/${category}`} passHref>
          <CategoryLink>{category}</CategoryLink>
        </Link>

        {/* Chevron right */}
        <Chevron>
          <use href="/chevron-right.svg#icon" />
        </Chevron>

        {/* Product name */}
        <TopName>{name}</TopName>
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
            starts
            {/* Ratings count */}
            221 ratings
          </TotalRatings>

          {/* Price */}
          <Price>{formatPrice(259)}</Price>

          {/* Discounted price */}
          {true && (
            <DiscountedPrice>
              <span>{formatPrice(270)}</span>
              <span>-4%</span>
            </DiscountedPrice>
          )}

          <QuantityContainer>
            Quantity:
            <QuantityButtons>
              {/* Decrease button */}
              <QuantityBtn>
                <QuantityIcon>
                  <use href="/minus.svg#icon" />
                </QuantityIcon>
              </QuantityBtn>

              {/* current quantity */}
              <span>1</span>

              {/* Increase button */}
              <QuantityBtn>
                <QuantityIcon>
                  <use href="/plus.svg#icon" />
                </QuantityIcon>
              </QuantityBtn>
            </QuantityButtons>
          </QuantityContainer>

          {/* Action buttons */}
          <ActionButtons>
            {/* Buy now button */}
            <ActionBtn>Buy Now</ActionBtn>

            {/* Add to cart button */}
            <ActionBtn>Add to Cart</ActionBtn>
          </ActionButtons>
        </InfoSide>
      </DetailsSection>

      {/* Description */}
      <DescriptionSection>
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
      <ReviewsSection>
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
      </ReviewsSection>
    </Root>
  );
};

export default ProductFullPreview;
