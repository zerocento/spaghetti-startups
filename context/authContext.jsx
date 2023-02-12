import { useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
  verifyPasswordResetCode,
  confirmPasswordReset,
  applyActionCode,
} from 'firebase/auth';
import UserContext from './userContext';
import { app } from '../lib/firebase/firebaseClientSetup';
import { useRouter } from 'next/router';

export const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const router = useRouter();

  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);
  function handleVerifyEmail(actionCode) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    // Try to apply the email verification code.
    applyActionCode(auth, actionCode)
      .then((resp) => {
        // Email address has been verified.
        // TODO: Display a confirmation message to the user.
        // You could also provide the user with a link back to the app.
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
        alert('Email Verificata con successo!');
        console.log(resp);
        router.push({
          pathname: '/login',
        });
      })
      .catch((error) => {
        console.log(error);
        router.push({
          pathname: '/login',
        });
      });
  }
  function handleResetPassword(actionCode, password) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.

    // Verify the password reset code is valid.
    console.log(actionCode);
    console.log(password);
    console.log(auth);

    verifyPasswordResetCode(auth, actionCode)
      .then((email) => {
        const accountEmail = email;

        // TODO: Show the reset screen with the user's email and ask the user for
        // the new password.
        // Save the new password.
        confirmPasswordReset(auth, actionCode, password)
          .then((resp) => {
            // Password reset has been confirmed and new password updated.
            // TODO: Display a link back to the app, or sign-in the user directly
            // if the page belongs to the same domain as the app:
            // auth.signInWithEmailAndPassword(accountEmail, newPassword);
            // TODO: If a continue URL is available, display a button which on
            // click redirects the user back to the app via continueUrl with
            // additional state determined from that URL's parameters.
            alert('Password Cambiata Con Successo !');
            router.push('/login');
          })
          .catch((error) => {
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
            console.log(error);
          });
      })
      .catch((error) => {
        // Invalid or expired action code. Ask user to try to reset the password
        // again.
        console.log(error);
      });
  }

  const logout = () => {
    return signOut(auth);
  };

  const signIn = async (email, password) => {
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
          handleResetPassword: handleResetPassword,
          handleVerifyEmail: handleVerifyEmail,
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
