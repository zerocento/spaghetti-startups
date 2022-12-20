import { getAuth, signInWithCustomToken } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/authContext';
import { app } from '../lib/firebaseClientSetup';

export default function privacypolicy() {
  const [uid, setUid] = useState('');
  const { user } = UserAuth();
  return <div>{user && user}</div>;
}
