import { GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import FeaturedCategory from '../components/FeaturedCategory';
import FeaturedProdBanner from '../components/FeaturedProdBanner';
import FeaturedProdPreview from '../components/FeaturedProdPreview';
import ImageSlideshow from '../components/ImageSlideshow';
import ProductsCarousel from '../components/ProductsCarousel';
import { FEATURED_PRODUCTS } from '../constants';
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

  const featuredOne = FEATURED_PRODUCTS[0];
  const featuredTwo = FEATURED_PRODUCTS[1];
  const featuredThree = FEATURED_PRODUCTS[2];

  return (
    <>
      <section>
        {/* Image slideshow */}
        <ImageSlideshow />

        {/* Featured products preview */}
        <FeaturedProducts>
          <FeaturedProdPreview
            title={featuredOne.displayName}
            description={featuredOne.description}
            href={`/${featuredOne.category}/${featuredOne.productId}`}
            img={featuredOne.img}
            alt={featuredOne.name}
            width={200}
            height={275}
          />

          <FeaturedProdPreview
            title={featuredTwo.displayName}
            description={featuredTwo.description}
            href={`/${featuredTwo.category}/${featuredTwo.productId}`}
            img={featuredTwo.img}
            alt={featuredTwo.name}
            width={332}
            height={219}
          />
        </FeaturedProducts>
      </section>

      {/* Products carousel */}
      <ProductsCarousel furnitureProducts={products} />

      {/* Featured product banner */}
      <section>
        <FeaturedProdBanner
          title={featuredThree.displayName}
          href={`/${featuredThree.category}/${featuredThree.productId}`}
          img={featuredThree.img}
          alt={featuredThree.name}
          width={222}
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
