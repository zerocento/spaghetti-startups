import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/authContext';

const PROTECTED_ROUTES = ['/home'];
const PUBLIC_ROUTES = ['/signup', '/login', '/'];

const withUserSession = (WrappedComponent) => {
  return (props) => {
    const [isSessionValid, setIsSessionValid] = useState(false);
    const { user } = UserAuth();
    const router = useRouter();

    useEffect(() => {
      // Perform session check and update isSessionValid accordingly
      const checkSession = async () => {
        if (user && PUBLIC_ROUTES.includes(router.route)) {
          router.replace('/');
          return;
        }

        if (!user && PROTECTED_ROUTES.includes(router.route)) {
          router.replace('/login');
          return;
        }

        setIsSessionValid(true);
      };
      checkSession();
    }, [user]);

    if (isSessionValid) {
      return <WrappedComponent {...props} />;
    }
  };
};

export default withUserSession;
