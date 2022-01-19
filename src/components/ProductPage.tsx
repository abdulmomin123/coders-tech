import Link from 'next/link';
import Image from 'next/image';
import { FC, useContext, useState } from 'react';
import styled, { css } from 'styled-components';
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
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ProductImage from './ProductImage';
import LoadingAnimation from './LoadingAnimation';
import { getSession, getStripe } from '../lib/stripe/stripe';
import { NotificationContextSetter } from '../contexts/Notification';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { firestore } from '../lib/firebase/firebase';
import { Question } from '../Types';
import {
  CurrentProductContext,
  CurrentProductsSetter,
} from '../contexts/currentProduct';

const Root = styled.div`
  max-width: 115rem;
  margin: 0 auto;
`;

const alignItemsCenter = css`
  align-items: center;
`;

const mrBtm1 = css`
  margin-bottom: 1rem;
`;

const colorGrey = css`
  color: #757575;
`;

const TopNameAndCategory = styled.div`
  font-size: 2rem;
  display: inline-flex;
  ${alignItemsCenter}
  justify-content: center;
  padding: 1rem 0;
  ${mrBtm1}
  ${colorGrey}
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

const displayGrid = css`
  display: grid;
`;

const gap8Rem = css`
  gap: 8rem;
`;

const padding3Rem = css`
  padding: 3rem;
`;

const mrBtm3 = css`
  margin-bottom: 3rem;
`;

const bgWhite = css`
  background: #fff;
`;

const borderRadius3px = css`
  border-radius: 3px;
`;

const DetailsSection = styled.section`
  ${displayGrid}
  grid-template-columns: max-content 1fr;
  ${gap8Rem}
  ${padding3Rem}
  ${mrBtm3}
  ${bgWhite}
  ${borderRadius3px}

  @media only screen and (max-width: 46.875em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 25em) {
    padding: 2rem;
  }
`;

const ImagesSide = styled.div`
  @media only screen and (max-width: 43.75em) {
    justify-self: center;
  }
`;

const displayFlex = css`
  display: flex;
`;

const Thumbnails = styled.div`
  ${displayFlex}
  justify-content: space-between;
`;

const cursor = css`
  cursor: pointer;
`;

const ThumbnailContainer = styled.div<{ isSelected: boolean }>`
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#f57224' : '#dadada')};
  border-radius: 2px;
  ${cursor}
  transition: border 0.2s;

  &:hover {
    border: 1px solid #f57224;
  }
`;

const InfoSide = styled.div`
  ${displayGrid}
  grid-template-rows: repeat(4, max-content) 1fr;
`;

const mrBtm1AndAHalf = css`
  margin-bottom: 1.5rem;
`;

const darkColor = css`
  color: #212121;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  ${mrBtm1AndAHalf}
  ${darkColor}
`;

const fontSizeNormal = css`
  font-size: 1.7rem;
`;

const mrBtm4 = css`
  margin-bottom: 4rem;
`;

const TotalRatings = styled.div`
  ${fontSizeNormal}
  ${displayFlex}
  ${alignItemsCenter}
  ${mrBtm4}
`;

const TotalRatingsLink = styled.a`
  margin-left: 1rem;
  color: #1d899e;
  ${cursor}
`;

const fontSizeMedium = css`
  font-size: 3.3rem;
`;

const PriceDetails = styled.div``;

const Price = styled.p`
  ${fontSizeMedium}
  color: #f57224;
  ${mrBtm1}
`;

const OldPriceContainer = styled.div`
  ${fontSizeNormal}
`;

const colorLightGrey = css`
  color: #9e9e9e;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  ${colorLightGrey}
`;

const DiscountPercent = styled.span`
  ${darkColor}
`;

const fontSizeSmall18 = css`
  font-size: 1.8rem;
`;

const QuantityContainer = styled.div`
  ${fontSizeSmall18}
  ${displayFlex}
  ${alignItemsCenter}
  margin-top: 6rem;
  ${colorGrey}
`;

const gridAutoFlCol = css`
  grid-auto-flow: column;
`;

const gap2Rem = css`
  gap: 2rem;
`;

const QuantityButtons = styled.div`
  ${displayGrid}
  ${gridAutoFlCol}
  ${alignItemsCenter}
  ${gap2Rem}
  margin-left: 4rem;
`;

const borderRadius5px = css`
  border-radius: 5px;
`;

const transitionBg = css`
  transition: background 0.2s;
`;

const QuantityBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  ${displayGrid}
  place-items: center;
  background: rgba(0, 0, 0, 0.08);
  ${borderRadius5px}
  ${transitionBg}

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
`;

const QuantityIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  fill: #777676;
`;

const fontBold = css`
  font-weight: 500;
`;

const QuantityCount = styled.span`
  ${darkColor}
  ${fontBold}
`;

const ActionButtons = styled.div`
  align-self: end;
  ${displayGrid}
  ${gridAutoFlCol}
  ${gap2Rem}

  @media only screen and (max-width: 43.75em) {
    margin-top: 3rem;
  }
`;

const fontSizeSmall19 = css`
  font-size: 1.9rem;
`;

const ActionBtn = styled.button<{ bg: string; bgHover: string }>`
  ${fontSizeSmall19}
  ${fontBold}
  padding: 1.5rem 0;
  color: #fff;
  background: ${({ bg }) => bg};
  ${borderRadius3px}
  ${transitionBg}

  &:hover {
    background: ${({ bgHover }) => bgHover};
  }
`;

const DescriptionSection = styled.section`
  ${mrBtm3}
  ${bgWhite}
  ${borderRadius3px}
`;

const SectionTitle = styled.h2`
  ${fontSizeSmall19}
  padding: 2rem 3rem;
  ${darkColor}
  background: #fafafa;
`;

const Description = styled.p`
  ${fontSizeSmall18}
  line-height: 2;
  padding: 1rem 3rem 3rem 3rem;
`;

const ReviewsSection = styled.section`
  ${mrBtm3}
  ${bgWhite}
  ${borderRadius3px}
`;

const Container = styled.div`
  ${padding3Rem}

  @media only screen and (max-width: 38.125em) {
    padding: 2rem;
  }
`;

const gridTemplateCols = css`
  grid-template-columns: repeat(2, max-content);
`;

const ReviewButtons = styled.div`
  ${displayGrid}
  ${gridTemplateCols}
  ${gap2Rem}
  ${mrBtm4}
`;

const ReviewBtn = styled.button<{ isSelected: boolean }>`
  ${fontSizeSmall18}
  ${fontBold}
  padding-bottom: 0.5rem;
  border-bottom: 4px solid
    ${({ isSelected }) => (isSelected ? '#46D6AB' : '#ccc')};
  transition: border-color 0.2s;

  &:hover {
    border-color: #46d6ab;
  }
`;

const Ratings = styled.div`
  ${displayGrid}
  ${gridTemplateCols}
  ${gap8Rem}
  margin-bottom: 8rem;

  @media only screen and (max-width: 40.625em) {
    gap: 3rem;
  }

  @media only screen and (max-width: 35.9375em) {
    grid-template-columns: 1fr;
  }
`;

const RatingsLeft = styled.div`
  font-size: 1.4rem;
  ${fontBold}
  ${colorGrey}
`;

const Numbers = styled.div`
  ${mrBtm1AndAHalf}
`;

const StarsContainer = styled.div`
  ${mrBtm1}
`;

const gap1Rem = css`
  gap: 1rem;
`;

const RatingsRight = styled.div`
  ${displayGrid}
  ${gap1Rem}
`;

const Rating = styled.span`
  font-size: 5rem;
  ${darkColor}
`;

const RatingOutOf = styled.span`
  ${fontSizeMedium}
  ${colorLightGrey}
`;

const Feedbacks = styled.div`
  ${displayGrid}
  gap: 5rem;
  margin-bottom: 5rem;
`;

const AskQuestionForm = styled.form`
  ${fontSizeNormal}
  ${fontBold}
  ${displayGrid}
  grid-template-columns: 1fr;
  ${gap1Rem}
`;

const QuestionInputContainer = styled.div``;

const QuestionInput = styled.textarea<{ error: boolean }>`
  width: 100%;
  padding: 1.5rem;
  color: #666;
  background: rgba(0, 0, 0, 0.04);
  border: 3px solid ${({ error }) => (error ? 'red' : '#ccc')};
  ${borderRadius5px}
  resize: vertical;
`;

const SubmitBtn = styled.button`
  ${fontSizeSmall18}
  justify-self: start;
  padding: 1rem 3rem;
  color: #333;
  background: var(--accent-color);
  ${borderRadius5px}
  ${transitionBg}

  &:hover {
    background: #42e7b0;
  }
`;

const QuestionError = styled.p`
  ${fontSizeNormal}
  font-weight: 300;
  margin: 0.5rem 0;
  color: red;
`;

const FeedbackGroup = styled.div`
  ${displayGrid}
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
  ${fontSizeSmall18}
`;

interface Props {
  product: FullProduct;
}

const ProductPage: FC<Props> = ({
  product: {
    id,
    category,
    name,
    price,
    oldPrice,
    priceId,
    thumbnail,
    description,
    images,
    reviews,
    questions,
  },
}) => {
  const currentProduct = useContext(CurrentProductContext);
  const setCurrentProduct = useContext(CurrentProductsSetter);
  const cartItems = useContext(CartItemsContext);
  const setCartItems = useContext(CartItemsSetter);
  const { setIsCartOpen, hasCartOpened, setHasCartOpened } =
    useContext(CartContext);
  const user = useContext(UserContext);
  const setNotification = useContext(NotificationContextSetter);
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
  const [isLoading, setIsLoading] = useState(false);
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);

  const avgRating = reviews.length
    ? +(
        reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
      ).toFixed(2)
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
                  &nbsp;-{Math.floor(((oldPrice - price) * 100) / 100)}%
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
            <ActionBtn
              disabled={isLoading}
              bg="#2abbe8"
              bgHover="#26abd4"
              onClick={async () => {
                // Send a POST request with line items for a checkout session
                try {
                  setIsLoading(true);

                  const session = await getSession(
                    user ? user.email : '',
                    [{ price: priceId, quantity }],
                    router.asPath,
                    'none'
                  );

                  if ((session as any).statusCode === 500) {
                    return setNotification({
                      type: 'error',
                      text: 'Something went wrong.',
                    });
                  }

                  // Redirect to Checkout
                  const stripe = await getStripe();

                  const { error } = await stripe!.redirectToCheckout({
                    sessionId: session.id,
                  });

                  if (error)
                    setNotification({
                      type: 'error',
                      text: 'Something went wrong.',
                    });

                  setIsLoading(false);
                } catch (_) {
                  setIsLoading(false);
                  setNotification({
                    type: 'error',
                    text: 'Something went wrong.',
                  });
                }
              }}
            >
              {isLoading ? <LoadingAnimation /> : 'Buy Now'}
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
                    priceId,
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
                onSubmit={handleSubmit(async ({ question }) => {
                  if (!user) return router.push('/login');

                  try {
                    setIsAskingQuestion(true);

                    // Add a question doc in questions collections
                    const questionRef = await addDoc(
                      collection(
                        firestore,
                        'products',
                        'categories',
                        category,
                        id,
                        'questions'
                      ),
                      {
                        name: user.name,
                        image: user.image,
                        feedback: question,
                        date: serverTimestamp(),
                      }
                    );

                    const createdQuestion = (
                      await getDoc(
                        doc(
                          firestore,
                          'products',
                          'categories',
                          category,
                          id,
                          'questions',
                          questionRef.id
                        )
                      )
                    ).data() as Question;

                    setCurrentProduct({
                      ...currentProduct!,
                      questions: [
                        ...currentProduct!.questions,
                        {
                          id: questionRef.id,
                          name: user.name,
                          image: user.image,
                          feedback: createdQuestion.feedback,
                          date: createdQuestion.date,
                          replies: [],
                        },
                      ],
                    });

                    // Reset the form
                    reset();
                    setIsAskingQuestion(false);
                  } catch (_) {
                    setNotification({
                      type: 'error',
                      text: 'Something went wrong.',
                    });

                    // Reset the form
                    reset();
                    setIsAskingQuestion(false);
                  }

                  return;
                })}
              >
                <QuestionInputContainer>
                  {/* Input */}
                  <QuestionInput
                    placeholder="Ask a question..."
                    rows={4}
                    maxLength={150}
                    {...register('question', {
                      minLength: {
                        value: 15,
                        message: 'Should be at least 15 characters long',
                      },
                      maxLength: {
                        value: 150,
                        message: 'Should be less than 150 characters',
                      },
                      required: {
                        value: true,
                        message: 'This field is required',
                      },
                    })}
                    error={!!errors.question}
                  />

                  {/* Error text */}
                  {errors.question && (
                    <QuestionError>{errors.question.message}</QuestionError>
                  )}
                </QuestionInputContainer>

                {/* Submit button */}
                <SubmitBtn
                  type="submit"
                  onClick={() => !user && router.push('/login')}
                >
                  {isAskingQuestion ? (
                    <LoadingAnimation />
                  ) : user ? (
                    'Ask question'
                  ) : (
                    'Log in to ask a question'
                  )}
                  {isLoading}
                </SubmitBtn>
              </AskQuestionForm>
            )}

            {selectedFeedback === 'reviews'
              ? (currentProduct?.reviews || reviews).map(review => (
                  <FeedbackGroup key={review.id}>
                    {/* Feedback */}
                    <Feedback
                      feedback={review}
                      category={category}
                      prodId={id}
                    />

                    {/* Reply */}
                    <ReplyContainer>
                      {review.replies.map(reply => (
                        <Feedback feedback={reply} key={reply.date.seconds} />
                      ))}
                    </ReplyContainer>
                  </FeedbackGroup>
                ))
              : (currentProduct?.questions || questions).map(question => (
                  <FeedbackGroup key={question.id}>
                    {/* Feedback */}
                    <Feedback
                      feedback={question}
                      category={category}
                      prodId={id}
                    />

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

export default ProductPage;
