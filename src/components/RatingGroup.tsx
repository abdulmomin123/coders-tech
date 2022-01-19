import { FC } from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';

const Root = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  gap: 2rem;
  color: #212121;

  @media only screen and (max-width: 23.1875em) {
    gap: 1rem;
  }
`;

const ProgressBar = styled.span`
  position: relative;
  width: 20rem;
  height: 1.5rem;
  background: #eff0f5;
  border-radius: 1px;
`;

const Progress = styled.span<{ totalRatings: number; ratings: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ totalRatings, ratings }) => `${(ratings * 100) / totalRatings}%`};
  height: 100%;
  background: #faca51;
`;

interface Props {
  stars: number;
  totalRatings: number;
  ratings: number;
}

const RatingGroup: FC<Props> = ({ stars, totalRatings, ratings }) => {
  return (
    <Root>
      {/* Stars */}
      <ReactStars
        count={5}
        value={stars}
        size={24}
        color1="#e1e1e4"
        color2="#faca51"
        edit={false}
      />

      {/* Progress bar */}
      <ProgressBar>
        <Progress totalRatings={totalRatings} ratings={ratings} />
      </ProgressBar>

      {/* Ratings count */}
      <span>{ratings}</span>
    </Root>
  );
};

export default RatingGroup;
