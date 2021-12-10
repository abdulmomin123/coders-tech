import styled from 'styled-components';
import FeaturedProdPreview from './FeaturedProdPreview';
import ImageSlideshow from './ImageSlideshow';

const FeaturedProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

const Container = styled.div`
  max-width: 152rem;
  margin: 0 auto;
`;

const HomePage = () => {
  const bg = '#f4f5f7';
  return (
    <>
      <Container>
        {/* Image slideshow */}
        <ImageSlideshow />

        {/* Featured products preview */}
        <FeaturedProducts>
          <FeaturedProdPreview
            title="Comfortable Chair"
            description="Domed as former time of very might vows trial road, its clarinet expect."
            href="/test"
            img="/chair.png"
            width={230}
            height={184}
            background={bg}
          />

          <FeaturedProdPreview
            title="Luxurious new desk"
            description="As shoulders ship first uninitiated theory mathematically trying. Nor some the measures arrived."
            href="/test"
            img="/table.png"
            width={330}
            height={132}
            background={bg}
          />
        </FeaturedProducts>
      </Container>
    </>
  );
};

export default HomePage;
