import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { User } from '../../Types';

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
