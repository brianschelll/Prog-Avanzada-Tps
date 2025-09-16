function groupBy(list, keyOrFn) {
  let result = {};

  for (let item of list) {
    // Determinar la clave
    let key;
    if (typeof keyOrFn === 'function') {
      key = keyOrFn(item);
    } else if (typeof keyOrFn === 'string') {
      key = item[keyOrFn];
    }

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

console.log(groupBy([{t:'a'},{t:'b'},{t:'a'}], 't'));

console.log(groupBy([6,7,8,9], n => n % 2 ? 'impar' : 'par'));
