function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || b === null) return false;
  if (typeof a !== 'object' || typeof b !== 'object') return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}
console.log(deepEqual({x:[1,2]}, {x:[1,2]})); // true
console.log(deepEqual({x:1}, {x:'1'}));       // false
console.log(deepEqual(null, null));           // true
console.log(deepEqual([1,2,3], [1,2,3]));     // true
console.log(deepEqual([1,2], [2,1]));         // false
console.log(deepEqual({a:{b:2}}, {a:{b:2}})); // true
