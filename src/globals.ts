let relativePath = '';

export const getRelativePath = (): string => {
  return relativePath.replace('dist', 'files');
};

export const setRelativePath = (path): void => {
  relativePath = path;
};