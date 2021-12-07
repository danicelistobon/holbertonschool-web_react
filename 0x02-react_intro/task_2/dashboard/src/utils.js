export const getFullYear = () => {
  let date = new Date();
  return date.getFullYear();
}

export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}
