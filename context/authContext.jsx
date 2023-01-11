import { useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import { collection } from 'firebase/firestore';
import UserContext from './userContext';
import { app } from '../lib/firebaseClientSetup';

export const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();

  const logout = () => {
    return signOut(auth);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
      })
      .catch((e) => {
        console.log(e.message);
        if (
          e.message == 'Firebase: Error (auth/wrong-password).' ||
          e.message == 'Firebase: Error (auth/user-not-found).'
        ) {
          alert('Credenziali Errate');
        }
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      //callback cercare
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
};

export const UserAuth = () => {
  return useContext(UserContext);
};
