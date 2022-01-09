import { createContext, FC, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, getUserProfile } from '../lib/firebase/firebase';
import { User } from '../Types';

export const UserContext = createContext<User | null>(null);
export const UserContextSetter = createContext<(user: User) => void>(() => {});
export const RecheckUserProfile = createContext<{
  value: boolean;
  reCheckUserProfile: (value: boolean) => void;
}>({
  value: false,
  reCheckUserProfile: () => {},
});

const UserProvider: FC = ({ children }) => {
  // State
  const [loggedInUser] = useAuthState(auth);
  const [user, setUser] = useState<User | null>(null);
  const [reCheckUserProfile, setReCheckUserProfile] = useState(false);

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
  }, [loggedInUser, reCheckUserProfile]);

  return (
    <UserContext.Provider value={user}>
      <RecheckUserProfile.Provider
        value={{
          value: reCheckUserProfile,
          reCheckUserProfile: setReCheckUserProfile,
        }}
      >
        <UserContextSetter.Provider value={setUser}>
          {children}
        </UserContextSetter.Provider>
      </RecheckUserProfile.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
