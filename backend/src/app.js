require("dotenv").config();

const express = require("express");
const cors = require("cors");
const carrerasRoutes = require("./routes/carreras.routes");

const app = express();

// ────────────────────────────────────────────────────────────
//  CORS
//  🚨 OJO — Misión 32: esta lista empieza solo con localhost.
//  Cuando el frontend quede desplegado en Vercel, su URL real
//  se agrega aquí (Checkpoint 3 de la guía).
// ────────────────────────────────────────────────────────────
app.use(cors({
    origin: [
        "http://localhost:5500",
        "https://runtrack-deploy-frontend.vercel.app", 
        "https://runtrack-deploy-frontend-git-main-michimichi.vercel.app" 
    ]
}));
app.use(express.json());

// Ruta simple para confirmar que el servidor está vivo
app.get("/", (req, res) => {
    res.json({ mensaje: "RunTrack API funcionando 🏃" });
});

app.use("/carreras", carrerasRoutes);

// 🚨 OJO — Misión 32: nunca un puerto fijo en producción.
// Railway asigna su propio puerto por variable de entorno.
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("RunTrack backend corriendo en el puerto " + PORT);
});