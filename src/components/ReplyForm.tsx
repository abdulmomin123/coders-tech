import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { FC, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import {
  CurrentProductContext,
  CurrentProductsSetter,
} from '../contexts/currentProduct';
import { UserContext } from '../contexts/User';
import { firestore } from '../lib/firebase/firebase';
import { Reply } from '../Types';
import LoadingAnimation from './LoadingAnimation';

const Root = styled.form``;

const fullWidth = css`
  width: 100%;
`;

const TextArea = styled.textarea<{ error: boolean }>`
  font-size: 1.7rem;
  height: 10rem;
  ${fullWidth}
  padding: 1.5rem;
  margin-bottom: 1rem;
  color: #666;
  background: rgba(0, 0, 0, 0.02);
  border: 3px solid ${({ error }) => (error ? 'red' : '#ccc')};
  border-radius: 5px;
  resize: vertical;
`;

const SubmitBtn = styled.button`
  font-size: 1.9rem;
  font-weight: 500;
  ${fullWidth}
  padding: 1rem;
  color: #fff;
  background: var(--accent-color);
  border-radius: 20px;
  transition: background 0.2s;

  &:hover {
    background: #2cb889;
  }
`;

interface Props {
  category: string;
  prodId: string;
  replyToId: string;
  replyTo: 'reviews' | 'questions';
  onSuccess?: () => void;
}

const ReplyForm: FC<Props> = ({
  category,
  prodId,
  replyToId,
  replyTo,
  onSuccess,
}) => {
  const user = useContext(UserContext);
  const currentProduct = useContext(CurrentProductContext);
  const setCurrentProduct = useContext(CurrentProductsSetter);

  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <Root
      onSubmit={handleSubmit(async ({ reply }) => {
        try {
          setIsLoading(true);

          // Add a question to category/prodId/questions collection
          const replyRef = await addDoc(
            collection(
              firestore,
              'products',
              'categories',
              category,
              prodId,
              replyTo,
              replyToId,
              'replies'
            ),
            {
              name: user?.name,
              image: user?.image,
              feedback: reply,
              date: serverTimestamp(),
            }
          );

          const createdReply = (
            await getDoc(
              doc(
                firestore,
                'products',
                'categories',
                category,
                prodId,
                replyTo,
                replyToId,
                'replies',
                replyRef.id
              )
            )
          ).data() as Reply;

          const newFeedbacks = [...currentProduct![replyTo]];
          const foundFeedback = newFeedbacks.find(({ id }) => id === replyToId);

          foundFeedback!.replies = [
            createdReply as Reply,
            ...foundFeedback!.replies,
          ];

          // Update feedbacks of current product
          setCurrentProduct({
            ...currentProduct!,
            [replyTo]: newFeedbacks,
          });

          setIsLoading(false);
          reset();
          onSuccess!();
        } catch (_) {
          setIsLoading(false);
        }
      })}
    >
      {/* Text area */}
      <TextArea
        placeholder="Leave a reply..."
        maxLength={150}
        error={!!errors.reply}
        {...register('reply', {
          required: true,
          minLength: 15,
          maxLength: 150,
        })}
      />

      {/* Submit button */}
      <SubmitBtn>{isLoading ? <LoadingAnimation /> : 'Reply'}</SubmitBtn>
    </Root>
  );
};

export default ReplyForm;
