function wordFreq(text) {
  // Normalizar: minúsculas y sin puntuación
  const cleanText = text
    .toLowerCase()
    .replace(/[.,:;!?]/g, ""); // elimina signos

  const words = cleanText.split(/\s+/); // separa por espacios
  const freqMap = new Map();

  for (let word of words) {
    if (word.trim() === "") continue; // ignorar vacíos
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  return freqMap;
}

// Ejemplo de uso
console.log(wordFreq("Hola, hola! chau.")); 

