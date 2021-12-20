import { createContext, FC, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, getUserProfile } from '../lib/firebase/firebase';
import { User } from '../Types';

export const UserContext = createContext<User | null>(null);

const UserProvider: FC = ({ children }) => {
  // State
  const [loggedInUser] = useAuthState(auth);
  const [user, setUser] = useState<User | null>(null);

  // If there is a logged in user fetch user info and update state
  // else set the state null
  useEffect(() => {
    (async () => {
      try {
        if (!loggedInUser) return setUser(null);

        const user = await getUserProfile(loggedInUser.uid);

        setUser(user);
      } catch (_) {
        setUser(null);
      }
    })();
  }, [loggedInUser]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
