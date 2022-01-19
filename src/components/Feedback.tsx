import Image from 'next/image';
import { FC, useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactStars from 'react-stars';
import { Question, Reply, Review } from '../Types';
import { UserContext } from '../contexts/User';
import ReplyForm from './ReplyForm';

const displayGrid = css`
  display: grid;
`;

const gridCols = css`
  grid-template-columns: max-content 1fr;
`;

const Root = styled.div`
  ${displayGrid}
  ${gridCols}
  align-items: start;
  column-gap: 1.5rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 1rem;

  @media only screen and (max-width: 24.375em) {
    padding: 1.5rem;
    column-gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  ${displayGrid}
  ${gridCols}
  align-items: center;
`;

const fontSize = css`
  font-size: 1.9rem;
`;

const fontWeight = css`
  font-weight: 500;
`;

const Name = styled.span`
  ${fontSize}
  ${fontWeight}
  margin-bottom: 0.3rem;
`;

const justifySelf = css`
  justify-self: end;
`;

const DateText = styled.span`
  font-size: 1.7rem;
  ${justifySelf}
`;

const RatingContainer = styled.div`
  margin-bottom: 0.8rem;
`;

const FeedbackText = styled.p`
  ${fontSize}
  line-height: 1.7;
  grid-column: 1 / -1;
`;

const gridCol = css`
  grid-column: 2 / -1;
`;

const ReplyBtn = styled.button`
  font-size: 1.8rem;
  ${fontWeight}
  ${gridCol}
  ${justifySelf}
  padding: 0.7rem 5rem;
  color: #fff;
  background: var(--accent-color);
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: #2cb889;
  }
`;

const FormContainer = styled.div`
  ${gridCol}
`;

interface Props {
  feedback: Review | Question | Reply;
  category?: string;
  prodId?: string;
}

const Feedback: FC<Props> = ({ feedback, category, prodId }) => {
  const user = useContext(UserContext);
  const [shouldFormShow, setShouldFormShow] = useState(false);

  const {
    id,
    name,
    image,
    date: { seconds },
    feedback: feedbackText,
    rating,
  } = feedback as Review;

  return (
    <Root>
      {/* User's image */}
      <ImageContainer>
        <Image src={image} alt={`Picture of ${name}`} width={55} height={55} />
      </ImageContainer>

      <InfoContainer>
        {/* Name */}
        <Name>{name}</Name>

        {/* Date */}
        <DateText>
          {new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
          }).format(new Date(seconds * 1000))}
        </DateText>

        {/* Rating */}
        {rating && (
          <RatingContainer>
            <ReactStars
              count={5}
              value={rating}
              size={20}
              color1="#e1e1e4"
              color2="#faca51"
              edit={false}
            />
          </RatingContainer>
        )}

        {/* Feedback text */}
        <FeedbackText>{feedbackText}</FeedbackText>

        {/* Reply button */}
        {user?.uid === '6S0uuCaFkbMOcxXhtx4c13H0Kcp2' && !shouldFormShow && (
          <ReplyBtn onClick={() => setShouldFormShow(true)}>Reply</ReplyBtn>
        )}
      </InfoContainer>

      <FormContainer>
        {/* Reply form */}
        {user?.uid === '6S0uuCaFkbMOcxXhtx4c13H0Kcp2' && shouldFormShow && (
          <ReplyForm
            category={category!}
            prodId={prodId!}
            replyToId={id}
            replyTo={rating ? 'reviews' : 'questions'}
            onSuccess={() => setShouldFormShow(false)}
          />
        )}
      </FormContainer>
    </Root>
  );
};

export default Feedback;
