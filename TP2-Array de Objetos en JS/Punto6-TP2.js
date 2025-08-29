// Ejercicio 6: Calcular estadísticas de red
const traficoRed = {
  "08:00": 1250,  // MB transferidos
  "09:00": 1870,
  "10:00": 2100,
  "11:00": 1950,
  "12:00": 1600,
  "13:00": 1300,
  "14:00": 1700,
  "15:00": 2200,
  "16:00": 1800,
  "17:00": 1500
};

// Total de datos transferidos
const totalDatos = Object.values(traficoRed).reduce((acum, valor) => acum + valor, 0);

// Hora con mayor tráfico
let horaMax = "";
let maxValor = 0;

for (const hora in traficoRed) {
  if (traficoRed[hora] > maxValor) {
    maxValor = traficoRed[hora];
    horaMax = hora;
  }
}

console.log("Total de datos transferidos:", totalDatos, "MB");
console.log("Hora con mayor tráfico:", horaMax, "con", maxValor, "MB");
