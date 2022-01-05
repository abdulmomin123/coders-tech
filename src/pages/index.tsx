import { GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import FeaturedCategory from '../components/FeaturedCategory';
import FeaturedProdBanner from '../components/FeaturedProdBanner';
import FeaturedProdPreview from '../components/FeaturedProdPreview';
import ImageSlideshow from '../components/ImageSlideshow';
import ProductsCarousel from '../components/ProductsCarousel';
import { getNumProducts } from '../lib/firebase/firebase';
import { ProductPreviewType } from '../Types';

export const getStaticProps: GetStaticProps = async () => {
  // Fetch first 8 products of furniture
  const [products] = await getNumProducts('furniture');

  // Fetch featured categories along with first 3 products
  const [lightingProducts] = await getNumProducts('lighting', undefined, 3);
  const [rugProducts] = await getNumProducts('rugs', undefined, 3);

  return {
    props: {
      result: JSON.stringify({
        products,
        featuredCategories: [
          {
            name: 'lighting',
            description:
              "Look up, look around, but don't stare. Lighting! It's here, there and everywhere.",
            products: lightingProducts,
          },
          {
            name: 'rugs',
            description:
              'Treat your feet every day with warm area rugs for your bedroom or living room.',
            products: rugProducts,
          },
        ],
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
  const { products, featuredCategories } = JSON.parse(result) as {
    products: ProductPreviewType[];
    featuredCategories: {
      name: string;
      description: string;
      products: ProductPreviewType[];
    }[];
  };

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
      <FeaturedCategories>
        {featuredCategories.map(({ name, description, products }) => (
          <FeaturedCategory
            key={name}
            name={name}
            description={description}
            products={products}
          />
        ))}
      </FeaturedCategories>
    </>
  );
};

export default index;
