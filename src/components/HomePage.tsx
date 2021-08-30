import styled from 'styled-components';
import ImageSlideshow from './ImageSlideshow';

const Root = styled.div`
  background: #f6f6f6;
`;

const HomePage = () => {
  return (
    <Root>
      {/* Image slideshow */}
      <ImageSlideshow />
    </Root>
  );
};

export default HomePage;
