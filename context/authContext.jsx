import { useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import UserContext from './userContext';
import { app } from '../lib/firebase/firebaseClientSetup';

export const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    return signOut(auth);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!loading) {
    return (
      <UserContext.Provider
        value={{
          user: user,
          logout: logout,
          signIn: signIn,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
};

export const UserAuth = () => {
  return useContext(UserContext);
};
