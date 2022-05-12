export const getRedirectPath = (): string | null => {
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get('next');

  if (redirect) {
    const decodedRedirect = decodeURIComponent(redirect);
    return decodedRedirect;
  }
  return null;
};
