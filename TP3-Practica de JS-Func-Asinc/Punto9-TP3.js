function debounce(fn, delay) {
  let timer; // se guarda el id del timeout

  return function (...args) {
    const context = this; // preservo el this

    clearTimeout(timer); // se cancela el timer previo

    timer = setTimeout(() => {
      fn.apply(context, args); // se ejecuta con this y args correctos
    }, delay);
  };
}
function sayHi(name) {
  console.log("Hola " + name);
}

const debouncedHi = debounce(sayHi, 1000);

debouncedHi("Brian");
debouncedHi("Brian");
debouncedHi("Brian"); 
