const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// 🔹 Conecta a Mongo (cambia según docker-compose o local)
mongoose.connect("mongodb://localhost:27017/tpdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error al conectar:", err));

// 🔹 Rutas
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// 🔹 Levanta servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
