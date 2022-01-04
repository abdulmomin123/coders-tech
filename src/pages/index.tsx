import { GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import FeaturedCategory from '../components/FeaturedCategory';
import FeaturedProdBanner from '../components/FeaturedProdBanner';
import FeaturedProdPreview from '../components/FeaturedProdPreview';
import ImageSlideshow from '../components/ImageSlideshow';
import ProductsCarousel from '../components/ProductsCarousel';
import { getNumProducts } from '../lib/firebase/firebase';

export const getStaticProps: GetStaticProps = async () => {
  // Fetch slides

  // Fetch featured products

  // Fetch first 8 products of furniture
  const [products] = await getNumProducts('furniture');

  // Fetch featured categories along with first 3 products

  return {
    props: {
      result: JSON.stringify({
        products,
      }),
    },
    revalidate: 60,
  };
};

const FeaturedProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

const FeaturedCategories = styled.section`
  max-width: 120rem;
  margin: 0 auto 10rem auto;
`;

interface Props {
  result: string;
}

const index: FC<Props> = ({ result }) => {
  const { products } = JSON.parse(result);

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
      <ProductsCarousel furnitureProducts={products} />

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
      {/* <FeaturedCategories>
      <FeaturedCategory
        name="Lighting"
        description="Look up, look around, but don't stare. Lighting! It's here, there and everywhere."
      />

      <FeaturedCategory
        name="Rugs"
        description="Treat your feet every day with warm area rugs for your bedroom or living room."
      />
    </FeaturedCategories> */}
    </>
  );
};

export default index;
