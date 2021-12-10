import styled from 'styled-components';
import FeaturedProdBanner from './FeaturedProdBanner';
import FeaturedProdPreview from './FeaturedProdPreview';
import ImageSlideshow from './ImageSlideshow';
import ProductsCarousel from './ProductsCarousel';

const FeaturedProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

const HomePage = () => {
  return (
    <>
      <section>
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
          />

          <FeaturedProdPreview
            title="Luxurious new desk"
            description="As shoulders ship first uninitiated theory mathematically trying. Nor some the measures arrived."
            href="/test"
            img="/table.png"
            width={330}
            height={132}
          />
        </FeaturedProducts>
      </section>

      {/* Products carousel */}
      <ProductsCarousel />

      {/* Featured product banner */}
      <FeaturedProdBanner />
    </>
  );
};

export default HomePage;
