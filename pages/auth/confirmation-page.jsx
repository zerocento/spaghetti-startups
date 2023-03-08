import { useRouter } from 'next/router';
import React from 'react';

/*
  get dei parametri oob e mode
  autentico l'utente(avere oggetto auth nel componente)
  applyActionCode
  redirect a confirmation page or error page
*/

export default function confirmation_page({ oob, mode }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Hai correttamente confermato il tuo indirizzo email. Procedi con la Login
      a Spaghetti Startups. (link) {id}
    </div>
  );
}
