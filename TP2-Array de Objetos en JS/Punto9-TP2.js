// Ejercicio 9: Combinar datos de dispositivos y conexiones
// Combina información de dispositivos y conexiones para crear un informe
// detallado de la actividad de red.
const topologiaRed1 = {
nodos: [
{ id: "A", tipo: "Router", ubicacion: "Planta 1" },
{ id: "B", tipo: "Switch", ubicacion: "Planta 1" },
{ id: "C", tipo: "Switch", ubicacion: "Planta 2" },
{ id: "D", tipo: "Switch", ubicacion: "Planta 3" },
{ id: "E", tipo: "Router", ubicacion: "Planta 3" }
],
conexiones: [
{ origen: "A", destino: "B", ancho_banda: 1000 },
{ origen: "A", destino: "C", ancho_banda: 1000 },
{ origen: "B", destino: "C", ancho_banda: 100 },
{ origen: "B", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "E", ancho_banda: 1000 },
{ origen: "D", destino: "E", ancho_banda: 1000 }
]
};

// Cuenta el número de conexiones por nodo
const conexionesPorNodo1 = {};
topologiaRed1.nodos.forEach(nodo => {
conexionesPorNodo1[nodo.id] = 0;
});

// Tu código aquí para contar las conexiones
topologiaRed1.conexiones.forEach(conexion => {
  conexionesPorNodo1[conexion.origen]++;
  conexionesPorNodo1[conexion.destino]++;
});
// Encuentra los nodos con más conexiones
const nodosOrdenados1 = Object.entries(conexionesPorNodo1)
.sort((a, b) => b[1] - a[1]);

// Sugiere optimizaciones (por ejemplo, los nodos con más de 2 conexiones podrían necesitar más
// ancho de banda)
const sugerencias1 = [];
nodosOrdenados1.forEach(([nodo, cantidad]) => {
  if (cantidad > 2) {
    sugerencias1.push(
      `El nodo ${nodo} tiene ${cantidad} conexiones. Podría necesitar más ancho de banda.`
    );
  }
});

console.log("punto 9");
console.log("Conexiones por nodo:", conexionesPorNodo1);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados1);
console.log("Sugerencias de optimización:", sugerencias1);