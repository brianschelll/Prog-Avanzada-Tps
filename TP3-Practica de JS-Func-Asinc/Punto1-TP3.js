function sumUnique(nums) {
  // Se Convierte todo a números válidos y filtra los no numéricos
  let filtered = nums
    .map(n => Number(n))              // Se Intenta convertir a número
    .filter(n => Number.isFinite(n)); // Se Deja solo los que sean números válidos

  // Cree un Set para eliminar duplicados
  let unique = new Set(filtered);

  // Se Suma con reduce
  return [...unique].reduce((acc, val) => acc + val, 0);
}

console.log(sumUnique([1, 2, 2, 3]));          
console.log(sumUnique([1, '2', 2, 3, 'a']));  
console.log(sumUnique([10, 10, '10', null])); 
