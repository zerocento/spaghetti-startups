import { useRouter } from 'next/router';
import React from 'react';

export default function confirmation_pending() {
  const router = useRouter();
  const propValue = router.query.prop;
  return (
    <div>
      Grazie per esserti iscritto a Spaghetti Startups. Una mail di conferma è
      stata inviata all'indirizzo {propValue}, clicca sul link per confermare il
      tuo indirizzo email ed entrare in Spaghetti Startups. Se non vedi una mail
      all'indirizzo indicato, controlla lo Spam.{' '}
    </div>
  );
}
