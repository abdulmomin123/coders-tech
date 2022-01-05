import algoliasearch from 'algoliasearch';
import { RawProduct } from '../../Types';

// Algolia client credentials
const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!;
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!;
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!;

// Initialize the client
export const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

// Initialize an index
export const index = client.initIndex(ALGOLIA_INDEX_NAME);

export const uploadRecords = (products: RawProduct[]) =>
  products.forEach(
    async ({ name, price, description }) =>
      await index
        .saveObject(
          {
            name,
            price,
            description,
          },
          {
            autoGenerateObjectIDIfNotExist: true,
          }
        )
        .wait()
  );
