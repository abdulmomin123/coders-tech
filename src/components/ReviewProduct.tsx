import { FC, useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ReviewProductType } from '../Types';
import ReactStars from 'react-stars';
import { useForm } from 'react-hook-form';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { firestore } from '../lib/firebase/firebase';
import { UserContext, UserContextSetter } from '../contexts/User';
import LoadingAnimation from './LoadingAnimation';
import { NotificationContextSetter } from '../contexts/Notification';

const Root = styled.div<{ shouldDisplay: boolean }>`
  text-align: left;
  padding: 1rem;
  border-radius: 5px;

  &:nth-child(odd) {
    background: rgba(125, 240, 255, 0.3);
  }

  &:nth-child(even) {
    background: rgba(255, 235, 52, 0.3);
  }

  &:hover > :nth-child(1) > :nth-child(2) > :last-child {
    opacity: 1;
    visibility: ${({ shouldDisplay }) =>
      shouldDisplay ? 'initial' : 'hidden'};
  }
`;

const TopPart = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1.5rem;
`;

const ImageContainer = styled.a`
  border-radius: 1rem;
  overflow: hidden;
`;

const NameContainer = styled.div``;

const Name = styled.h2`
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #535353;
`;

const ButtonContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s;
`;

const buttonStyles = css`
  font-size: 1.9rem;
  font-weight: 500;
  color: #fff;
  transition: background 0.2s;
`;

const ReviewBtn = styled.button`
  ${buttonStyles}
  padding: 0.8rem 2rem;
  background: rgb(0, 114, 9);
  border-radius: 5px;

  &:hover {
    background: rgb(0, 143, 12);
  }
`;

const Form = styled.form`
  padding: 2rem;
  margin-top: 1rem;
  background: #fff;
  border-radius: 5px;
`;

const TextArea = styled.textarea<{ error: boolean }>`
  font-size: 1.7rem;
  height: 10rem;
  width: 100%;
  padding: 1.5rem;
  margin-top: 1rem;
  color: #666;
  background: rgba(0, 0, 0, 0.02);
  border: 3px solid ${({ error }) => (error ? 'red' : '#ccc')};
  border-radius: 5px;
  resize: vertical;
`;

const Error = styled.p`
  margin-top: 0.6rem;
  color: red;
`;

const SubmitBtnContainer = styled.div`
  margin-top: 2rem;
`;

const SubmitBtn = styled.button`
  ${buttonStyles}
  background: var(--accent-color);
  padding: 1rem;
  width: 100%;
  border-radius: 20px;

  &:hover {
    background: #2cb889;
  }
`;

interface Props {
  product: ReviewProductType;
}

const ReviewProduct: FC<Props> = ({
  product: { id, name, category, image },
}) => {
  const user = useContext(UserContext);
  const setUser = useContext(UserContextSetter);
  const setNotification = useContext(NotificationContextSetter);

  const [rating, setRating] = useState(1);
  const [shouldFormShow, setShouldFormShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Root shouldDisplay={!shouldFormShow}>
      <TopPart>
        <Link href={`/${category}/${id}`} passHref>
          <ImageContainer>
            {/* Image */}
            <Image src={image} alt={name} width={100} height={100} />
          </ImageContainer>
        </Link>

        <NameContainer>
          {/* Name */}
          <Name>{name}</Name>

          {/* Review button */}
          <ButtonContainer>
            <ReviewBtn onClick={() => setShouldFormShow(true)}>
              Review
            </ReviewBtn>
          </ButtonContainer>
        </NameContainer>
      </TopPart>

      {/* Form */}
      {shouldFormShow && (
        <Form
          onSubmit={handleSubmit(async ({ review }) => {
            if (rating < 0 || rating > 5) return;

            try {
              setIsLoading(true);

              // Add a review to the specific product
              await addDoc(
                collection(
                  firestore,
                  'products',
                  'categories',
                  category,
                  id,
                  'reviews'
                ),
                {
                  name: user!.name,
                  image: user!.image,
                  rating,
                  feedback: review,
                  date: serverTimestamp(),
                }
              );

              // Remove the product from users toBeReviewed collection
              await deleteDoc(
                doc(firestore, 'users', user!.uid, 'toBeReviewed', id)
              );

              // Remove the product from state
              const oldProducts = [...user!.toBeReviewed];

              setUser({
                ...user!,
                toBeReviewed: oldProducts.filter(product => product.id !== id),
              });

              setIsLoading(false);
            } catch (_) {
              setIsLoading(false);
              setNotification({ type: 'error', text: 'Something went wrong.' });
            }
          })}
        >
          {/* Stars */}
          <ReactStars
            count={5}
            value={rating}
            size={40}
            color1="#e1e1e4"
            color2="#faca51"
            onChange={rating => setRating(rating)}
          />

          {/* Textarea */}
          <TextArea
            placeholder="Write a review..."
            maxLength={180}
            {...register('review', {
              minLength: {
                value: 4,
                message: 'Should be at least 4 characters long',
              },
              maxLength: {
                value: 180,
                message: 'Should be less than 180 characters',
              },
              required: { value: true, message: 'This field is required' },
            })}
            error={errors.review}
          />

          {/* Error */}
          {errors.review && <Error>{errors.review.message}</Error>}

          {/* Submit button */}
          <SubmitBtnContainer>
            <SubmitBtn type="submit" disabled={isLoading}>
              {isLoading ? <LoadingAnimation /> : 'Post'}
            </SubmitBtn>
          </SubmitBtnContainer>
        </Form>
      )}
    </Root>
  );
};

export default ReviewProduct;
