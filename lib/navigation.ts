export const isPathActive = (pathname: string, targetPath: string) => {
  if (targetPath === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(targetPath);
};
