const http = async (request) => {
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error('Error'); // RequestError -> status: 500 - Message: '' - code	"auth/internal-error"
  }

  return response;
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
