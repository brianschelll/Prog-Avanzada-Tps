function sortByMany(list, specs) {
  let copy = [...list];

  copy.sort((a, b) => {
    for (let spec of specs) {
      let { key, dir } = spec;
      if (a[key] < b[key]) return dir === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return dir === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return copy;
}

// Ejemplo:
const users = [
  { lastName: 'Perez', age: 25 },
  { lastName: 'Gomez', age: 30 },
  { lastName: 'Perez', age: 20 },
  { lastName: 'Gomez', age: 40 }
];

console.log(
  sortByMany(users, [
    { key: 'lastName', dir: 'asc' },
    { key: 'age', dir: 'desc' }
  ])
);

