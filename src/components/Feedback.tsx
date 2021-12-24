import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';

const Root = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: start;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 1rem;
`;

const ImageContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
`;

const Name = styled.span`
  font-size: 1.9rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const DateText = styled.span`
  font-size: 1.7rem;
  justify-self: end;
`;

const RatingContainer = styled.div`
  margin-bottom: 0.8rem;
`;

const FeedbackText = styled.p`
  font-size: 1.9rem;
  line-height: 1.7;
  grid-column: 1 / -1;
`;

interface Props {
  uid: string;
  name: string;
  image: string;
  rating?: number;
  feedback: string;
  date: string;
}

const Feedback: FC<Props> = ({ name, image, rating, feedback, date }) => {
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
          }).format(new Date(date))}
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
        <FeedbackText>{feedback}</FeedbackText>
      </InfoContainer>
    </Root>
  );
};

export default Feedback;
