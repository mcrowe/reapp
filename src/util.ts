export function pull<T>(xs: T[], x: T) {
  const idx = xs.indexOf(x)
  if (idx > -1) {
    xs.splice(idx, 1)
  }
}