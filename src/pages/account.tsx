import {
  collection,
  endAt,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
  where,
} from 'firebase/firestore';
import { useEffect } from 'react';
import styled from 'styled-components';
import { firestore } from '../lib/firebase/firebase';

const Root = styled.div``;

const account = () => {
  useEffect(() => {
    (async () => {
      // Query the first page of docs
      const firstBatch = query(
        collection(firestore, 'products', 'categories', 'furniture'),
        orderBy('name'),
        limit(3)
      );
      const documentSnapshots = await getDocs(firstBatch);

      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];

      // Construct a new query starting at this document,
      // get the next 3 cities.
      const nextBatch = query(
        collection(firestore, 'products', 'categories', 'furniture'),
        orderBy('name'),
        startAfter(lastVisible),
        limit(3)
      );

      const res = (await getDocs(firstBatch)).docs.map(doc => doc.data());
      const res2 = (await getDocs(nextBatch)).docs.map(doc => doc.data());

      console.log(res, res2);
    })();
  }, []);

  return (
    <Root>
      <h1>My account</h1>
    </Root>
  );
};

export default account;
