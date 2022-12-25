import { useRouter } from 'next/router';
import React from 'react';

export default function confirmation_page() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      Hai correttamente confermato il tuo indirizzo email. Procedi con la Login
      a Spaghetti Startups. (link) {id}
    </div>
  );
}
