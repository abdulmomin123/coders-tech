import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

export const db = getFirestore(app);
export const auth = getAuth();
