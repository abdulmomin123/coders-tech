import Link from 'next/link';
import Image from 'next/image';
import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';
import { FullProduct } from '../Types';
import { camelCaseToNormal, capitalize, formatPrice } from '../helpers';
import Feedback from './Feedback';
import {
  CartContext,
  CartItemsContext,
  CartItemsSetter,
} from '../contexts/Cart';
import RatingGroup from './RatingGroup';
import { gridCenter } from '../styles/utils';
import { UserContext } from '../contexts/User';
import { useRouter } from 'next/dist/client/router';
import { useForm } from 'react-hook-form';
import ProductImage from './ProductImage';

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

const ImagesSide = styled.div``;

const Thumbnails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThumbnailContainer = styled.div<{ isSelected: boolean }>`
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#f57224' : '#dadada')};
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
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;

const TotalRatingsLink = styled.a`
  margin-left: 1rem;
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

const ReviewButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ReviewBtn = styled.button<{ isSelected: boolean }>`
  font-size: 1.8rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  border-bottom: 4px solid
    ${({ isSelected }) => (isSelected ? '#46D6AB' : '#ccc')};
  transition: border-color 0.2s;

  &:hover {
    border-color: #46d6ab;
  }
`;

const Ratings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 8rem;
  margin-bottom: 8rem;
`;

const RatingsLeft = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: #757575;
`;

const Numbers = styled.div`
  margin-bottom: 1.5rem;
`;

const StarsContainer = styled.div`
  margin-bottom: 1rem;
`;

const RatingsRight = styled.div`
  display: grid;
  gap: 1rem;
`;

const Rating = styled.span`
  font-size: 5rem;
  color: #212121;
`;

const RatingOutOf = styled.span`
  font-size: 3.3rem;
  color: #9e9e9e;
`;

const Feedbacks = styled.div`
  display: grid;
  gap: 5rem;
  margin-bottom: 5rem;
`;

const AskQuestionForm = styled.form`
  font-size: 1.7rem;
  font-weight: 500;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const QuestionInput = styled.textarea<{ error: boolean }>`
  height: 8rem;
  width: 80%;
  padding: 1.5rem;
  color: #666;
  background: rgba(0, 0, 0, 0.04);
  border: 3px solid ${({ error }) => (error ? 'red' : '#ccc')};
  border-radius: 5px;
  resize: vertical;
`;

const SubmitBtn = styled.button`
  font-size: 1.8rem;
  justify-self: start;
  padding: 1rem 3rem;
  color: #333;
  background: var(--accent-color);
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: #42e7b0;
  }
`;

const FeedbackGroup = styled.div`
  display: grid;
  gap: 0.7rem;
`;

const ReplyContainer = styled.div`
  margin-left: 8.5rem;
`;

const EmptyContainer = styled.div`
  height: 30vh;
  ${gridCenter}
  background: rgba(0,0,0,.04);
  border-radius: 1rem;
`;

const EmptyText = styled.p`
  font-size: 1.8rem;
`;

interface Props {
  product: FullProduct;
}

const ProductFullPreview: FC<Props> = ({
  product: {
    id,
    category,
    name,
    price,
    oldPrice,
    thumbnail,
    description,
    images,
    reviews,
    questions,
  },
}) => {
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(CartItemsSetter);
  const { setIsCartOpen, hasCartOpened, setHasCartOpened } =
    useContext(CartContext);
  const user = useContext(UserContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedFeedback, setSelectedFeedback] = useState<
    'reviews' | 'questions'
  >('reviews');

  const avgRating = reviews.length
    ? reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
    : 0;

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
          <ProductImage img={images[selectedImage]} alt={name} />

          {/* Thumbnails */}
          <Thumbnails>
            {images.map((img, i) => (
              <ThumbnailContainer
                key={i}
                onMouseOver={() => setSelectedImage(i)}
                isSelected={selectedImage === i}
              >
                <Image
                  src={`/products/${img}`}
                  alt={`${name} small size`}
                  width={55}
                  height={55}
                  layout="responsive"
                />
              </ThumbnailContainer>
            ))}
          </Thumbnails>
        </ImagesSide>

        {/* Right side */}
        <InfoSide>
          {/* Name */}
          <Name>{name}</Name>

          <TotalRatings>
            {/* Stars */}
            <ReactStars
              count={5}
              value={avgRating}
              size={20}
              color1="#e1e1e4"
              color2="#faca51"
              edit={false}
            />

            {/* Ratings count */}
            <Link href="#ratings" passHref>
              <TotalRatingsLink
                onClick={() =>
                  selectedFeedback !== 'reviews' &&
                  setSelectedFeedback('reviews')
                }
              >
                {reviews.length} {reviews.length > 1 ? 'ratings' : 'rating'}
              </TotalRatingsLink>
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

        <Description>{description}</Description>
      </DescriptionSection>

      {/* Reviews and questions */}
      <ReviewsSection id="ratings">
        <SectionTitle>Ratings & Reviews of {name}</SectionTitle>
        <Container>
          <ReviewButtons>
            {/* Reviews */}
            <ReviewBtn
              onClick={() => setSelectedFeedback('reviews')}
              isSelected={selectedFeedback === 'reviews'}
            >
              Reviews
            </ReviewBtn>

            {/* Questions */}
            <ReviewBtn
              onClick={() => setSelectedFeedback('questions')}
              isSelected={selectedFeedback === 'questions'}
            >
              Questions
            </ReviewBtn>
          </ReviewButtons>

          {/* Ratings */}
          <Ratings>
            {/* Left side */}
            <RatingsLeft>
              <Numbers>
                <Rating>{avgRating}</Rating>

                <RatingOutOf>/5</RatingOutOf>
              </Numbers>

              {/* Stars */}
              <StarsContainer>
                <ReactStars
                  count={5}
                  value={avgRating}
                  size={40}
                  color1="#e1e1e4"
                  color2="#faca51"
                  edit={false}
                />
              </StarsContainer>

              {/* Total ratings */}
              <span>
                {reviews.length} {reviews.length > 1 ? 'Ratings' : 'Rating'}
              </span>
            </RatingsLeft>

            {/* Right side */}
            <RatingsRight>
              {[5, 4, 3, 2, 1].map(star => (
                <RatingGroup
                  key={star}
                  stars={star}
                  totalRatings={reviews.length}
                  ratings={
                    reviews.filter(({ rating }) => rating === star).length
                  }
                />
              ))}
            </RatingsRight>
          </Ratings>

          {/* Feedbacks */}
          <Feedbacks>
            {/* Ask a question */}
            {selectedFeedback === 'questions' && (
              <AskQuestionForm
                onSubmit={handleSubmit(({ question }) => {
                  if (!user) return router.push('/login');

                  console.log(question);

                  // Reset the form
                  reset();
                  return;
                })}
              >
                {/* Input */}
                <QuestionInput
                  placeholder="Ask a question..."
                  maxLength={150}
                  {...register('question', {
                    required: true,
                    minLength: 15,
                    maxLength: 150,
                  })}
                  error={!!errors.question}
                />

                {/* Submit button */}
                <SubmitBtn
                  type="submit"
                  onClick={() => !user && router.push('/login')}
                >
                  {user ? 'Ask question' : 'Log in to ask a question'}
                </SubmitBtn>
              </AskQuestionForm>
            )}

            {selectedFeedback === 'reviews'
              ? reviews.map(review => (
                  <FeedbackGroup key={review.id}>
                    {/* Feedback */}
                    <Feedback feedback={review} />

                    {/* Reply */}
                    <ReplyContainer>
                      {review.replies.map(reply => (
                        <Feedback feedback={reply} key={reply.date.seconds} />
                      ))}
                    </ReplyContainer>
                  </FeedbackGroup>
                ))
              : questions.map(question => (
                  <FeedbackGroup key={question.id}>
                    {/* Feedback */}
                    <Feedback feedback={question} />

                    {/* Reply */}
                    <ReplyContainer>
                      {question.replies.map(reply => (
                        <Feedback feedback={reply} key={reply.date.seconds} />
                      ))}
                    </ReplyContainer>
                  </FeedbackGroup>
                ))}

            {/* If there is no reviews */}
            {selectedFeedback === 'reviews' && !reviews.length && (
              <EmptyContainer>
                <EmptyText>This product has no reviews.</EmptyText>
              </EmptyContainer>
            )}

            {/* If there is no questions */}
            {selectedFeedback === 'questions' && !questions.length && (
              <EmptyContainer>
                <EmptyText>There are no questions yet.</EmptyText>
              </EmptyContainer>
            )}
          </Feedbacks>
        </Container>
      </ReviewsSection>
    </Root>
  );
};

export default ProductFullPreview;
