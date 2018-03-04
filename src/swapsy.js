module.exports = (orig, a, b) => {
  if (!Array.isArray(orig)) {
    console.warn('invalid type for swapsy, expected Array as first param');
    return orig;
  }
  if (a < 0 || b < 0 || !orig[a] || !orig[b]) {
    console.warn('invalid indexes to swap, make sure your array has something in it');
    return orig;
  }
  const arr = orig.slice();
  [ arr[b], arr[a] ] = [ arr[a], arr[b] ];
  return arr;
}
