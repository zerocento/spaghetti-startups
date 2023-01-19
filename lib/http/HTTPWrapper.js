const http = (request) => {
  return fetch(request);
};

export const post = (url, body) => {
  const request = new Request(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return http(request);
};
