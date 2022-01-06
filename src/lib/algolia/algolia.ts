import algoliasearch from 'algoliasearch';
import { getProducts } from '../firebase/firebase';

// Algolia client credentials
const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!;
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!;
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!;

// Initialize the client
export const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// Initialize an index
export const index = client.initIndex(ALGOLIA_INDEX_NAME);

export const uploadRecords = async () => {
  // Getting all products
  const furnitureProds = await getProducts('furniture');
  const lightingProds = await getProducts('lighting');
  const rugsProds = await getProducts('rugs');
  const bathroomProds = await getProducts('bathroom');

  [...furnitureProds, ...lightingProds, ...rugsProds, ...bathroomProds].forEach(
    async ({ id, category, name, price, oldPrice, image }) =>
      await index
        .saveObject({
          objectID: id,
          category,
          name,
          price,
          oldPrice,
          image: image.replace('cover', '1'),
        })
        .wait()
  );
};
