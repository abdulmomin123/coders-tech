import styled from 'styled-components';
import FeaturedCategory from './FeaturedCategory';
import FeaturedProdBanner from './FeaturedProdBanner';
import FeaturedProdPreview from './FeaturedProdPreview';
import ImageSlideshow from './ImageSlideshow';
import ProductsCarousel from './ProductsCarousel';

const FeaturedProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

const FeaturedCategories = styled.section`
  max-width: 120rem;
  margin: 0 auto 10rem auto;
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
      <section>
        <FeaturedProdBanner
          title="Stylish Minimal Chair"
          href="/chairs/1"
          img="/f3.png"
          width={424}
          height={390}
        />
      </section>

      {/* Featured categories */}
      <FeaturedCategories>
        <FeaturedCategory
          name="Decoration"
          description="Small be and the rain would phase distance, succeed align."
        />
        <FeaturedCategory
          name="Architect"
          description="Small be and the rain would phase distance, succeed align."
        />
      </FeaturedCategories>
    </>
  );
};

export default HomePage;
