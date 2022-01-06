import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { User, ProductPreviewType, FullProduct, RawProduct } from '../../Types';

const firebaseConfig = {
  apiKey: 'AIzaSyCUbqFvykMxoJLIU0KtqOzfFAjcoAJKzoM',
  authDomain: 'shopnik-fb709.firebaseapp.com',
  projectId: 'shopnik-fb709',
  storageBucket: 'shopnik-fb709.appspot.com',
  messagingSenderId: '507940989598',
  appId: '1:507940989598:web:9bf1055b03d87ef3cfa98f',
  measurementId: 'G-2405XVEKL6',
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();

export const provider = new GoogleAuthProvider();

export const doesUserExist = async (uid: string) => {
  // Check if the user is already authenticated
  const docRef = doc(firestore, 'users', uid);
  const user = await getDoc(docRef);

  return user.exists() ? user : false;
};

export const createUserProfile = async (
  name: string,
  email: string,
  uid: string
) => {
  const user = await doesUserExist(uid);

  if (user) return;

  // Create profile image based on user's name
  const svg = createAvatar(style, {
    seed: uid,
  });

  const blob = new Blob([svg], {
    type: 'image/svg+xml',
  });

  // Upload the image to firebase storage
  const storageRef = ref(storage, `${uid}.svg`);

  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, blob);

  const image = await getDownloadURL(ref(storage, `${uid}.svg`));

  await setDoc(doc(firestore, 'users', uid), {
    name,
    email,
    image,
    uid,
  });
};

export const getUserProfile = async (uid: string) => {
  const foundUser = await doesUserExist(uid);

  return foundUser ? (foundUser.data() as User) : null;
};

// Get a single product's base info
export const getProduct = async (category: string, id: string) =>
  ({
    id,
    category,
    ...(
      await getDoc(doc(firestore, 'products', 'categories', category, id))
    ).data(),
  } as ProductPreviewType);

// Get all products of a category with product's base info
export const getProducts = async (category: string) =>
  (
    await getDocs(collection(firestore, 'products', 'categories', category))
  ).docs.map(
    doc =>
      ({
        id: doc.id,
        category: doc.ref.parent.id,
        thumbnail: (doc.data().image as string).replace('cover', '1'),
        ...doc.data(),
      } as ProductPreviewType)
  );

// Get a single product's full details
export const getFullProduct = async (category: string, id: string) => {
  // Get description of the product
  const { description } = (
    await getDocs(
      collection(
        firestore,
        'products',
        'categories',
        category,
        id,
        'description'
      )
    )
  ).docs[0].data();

  // Get priceId of the product
  // const { priceId } = (
  //   await getDocs(
  //     collection(firestore, 'products', 'categories', category, id, 'priceId')
  //   )
  // ).docs[0].data();

  // Get images of the product
  const { images } = (
    await getDocs(
      collection(firestore, 'products', 'categories', category, id, 'images')
    )
  ).docs[0].data();

  // Get the reviews of the product
  const reviews = await Promise.all(
    (
      await getDocs(
        collection(firestore, 'products', 'categories', category, id, 'reviews')
      )
    ).docs.map(async review => {
      // Get the replies of the review
      const replies = (
        await getDocs(
          collection(
            firestore,
            'products',
            'categories',
            category,
            id,
            'reviews',
            review.id,
            'replies'
          )
        )
      ).docs.map(doc => doc.data());

      // Return the review along with it's replies
      return { id: review.id, ...review.data(), replies };
    })
  );

  // Get the questions of the product
  const questions = await Promise.all(
    (
      await getDocs(
        collection(
          firestore,
          'products',
          'categories',
          category,
          id,
          'questions'
        )
      )
    ).docs.map(async question => {
      // Get the replies of the question
      const replies = (
        await getDocs(
          collection(
            firestore,
            'products',
            'categories',
            category,
            id,
            'questions',
            question.id,
            'replies'
          )
        )
      ).docs.map(doc => doc.data());

      // Return the question along with it's replies
      return { id: question.id, ...question.data(), replies };
    })
  );

  const prodData = (
    await getDoc(doc(firestore, 'products', 'categories', category, id))
  ).data();

  return {
    id,
    category,
    thumbnail: (prodData!.image as string).replace('cover', '1'),
    ...prodData,
    description,
    images,
    reviews,
    questions,
  } as FullProduct;
};

// Get the first 8 products of a category
export const getNumProducts = async (
  category: string,
  startAt?: QueryDocumentSnapshot<DocumentData>,
  count: number = 8
): Promise<[ProductPreviewType[], QueryDocumentSnapshot<DocumentData>]> => {
  const productsQuery = startAt
    ? query(
        collection(firestore, 'products', 'categories', category),
        orderBy('name'),
        startAfter(startAt),
        limit(count)
      )
    : query(
        collection(firestore, 'products', 'categories', category),
        orderBy('name'),
        limit(count)
      );

  const documentSnapshots = await getDocs(productsQuery);

  // Get the last visible document
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

  const products = documentSnapshots.docs.map(
    doc =>
      ({
        id: doc.id,
        category,
        thumbnail: (doc.data().image as string).replace('cover', '1'),
        ...doc.data(),
      } as ProductPreviewType)
  );

  return [products, lastVisible];
};

export const uploadProducts = async (
  category: string,
  products: RawProduct[]
) => {
  products.forEach(
    async ({
      name,
      price,
      oldPrice,
      image,
      description,
      images,
      createdAt,
    }) => {
      const product = {
        name,
        price,
        image,
        createdAt,
      };

      // Upload the basic details
      const prodRef = await addDoc(
        collection(firestore, 'products', 'categories', category),
        oldPrice ? { ...product, oldPrice } : product
      );

      // Upload the description collection
      await setDoc(
        doc(
          firestore,
          'products',
          'categories',
          category,
          prodRef.id,
          'description',
          'description'
        ),
        { description }
      );

      // Upload the images collection
      await setDoc(
        doc(
          firestore,
          'products',
          'categories',
          category,
          prodRef.id,
          'images',
          'images'
        ),
        { images }
      );
    }
  );
};
