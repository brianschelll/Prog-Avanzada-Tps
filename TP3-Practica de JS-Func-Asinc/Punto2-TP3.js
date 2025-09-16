function pick(obj, keys) {
  // Crea un nuevo objeto vacío
  let result = {};

  // Recorre las keys pedidas
  for (let key of keys) {
    if (key in obj) {   // Si la clave existe en obj
      result[key] = obj[key];
    }
  }

  return result; // Devuelve el nuevo objeto
}

console.log(pick({a:1, b:2, c:3}, ['a','c','z']));  
console.log(pick({x:10, y:20}, ['y']));  
console.log(pick({x:10, y:20}, ['z']));  
