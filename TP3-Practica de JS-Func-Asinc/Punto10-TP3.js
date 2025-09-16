// Consigna A: withTimeout(promise, ms)
// Rechaza con Error("Timeout") si la promesa no resuelve en ms.
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Timeout")), ms);
    promise
      .then(value => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// Consigna B: allSettledLite(promises)
// Devuelve un array con objetos {status:'fulfilled', value} o {status:'rejected', reason}
function allSettledLite(promises) {
  return Promise.all(
    promises.map(p =>
      p
        .then(value => ({ status: "fulfilled", value }))
        .catch(reason => ({ status: "rejected", reason }))
    )
  );
}

// Ejemplos:

// Ejemplo 1: withTimeout
const promesaLenta = new Promise(resolve => setTimeout(() => resolve("ok!"), 2000));
withTimeout(promesaLenta, 1000)
  .then(console.log)
  .catch(console.error); 
// → Error: Timeout (porque tarda 2s y el límite es 1s)

const promesaRapida = new Promise(resolve => setTimeout(() => resolve("listo!"), 500));
withTimeout(promesaRapida, 1000)
  .then(console.log)
  .catch(console.error); 
// → "listo!" (porque se resuelve antes de 1s)

// Ejemplo 2: allSettledLite
function ok() {
  return Promise.resolve("éxito!");
}
function falla() {
  return Promise.reject("error!");
}

allSettledLite([ok(), falla(), Promise.resolve(123)])
  .then(console.log);
// → [
//     { status: 'fulfilled', value: 'éxito!' },
//     { status: 'rejected', reason: 'error!' },
//     { status: 'fulfilled', value: 123 }
//   ]
