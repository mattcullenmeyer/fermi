export const setRedirectPath = (path: string) => {
  const currentPath = window.location.pathname;
  const currentPathEncoded = encodeURIComponent(currentPath);

  return `${path}?next=${currentPathEncoded}`;
};
