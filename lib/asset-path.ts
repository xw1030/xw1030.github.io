/** Public assets need the same subdirectory prefix as Next's compiled assets. */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
