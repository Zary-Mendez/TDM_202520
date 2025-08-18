const express = require("express");
const app = express();
app.use(express.json());

let tareas = [
  { id: 1, titulo: "Aprender Node.js" },
  { id: 2, titulo: "Hacer un CRUD" }
];

// Obtener todas las tareas
app.get("/api/tareas", (req, res) => {
  res.json(tareas);
});

// Crear una tarea
app.post("/api/tareas", (req, res) => {
  const nueva = { id: Date.now(), titulo: req.body.titulo };
  tareas.push(nueva);
  res.json(nueva);
});

// Editar tarea
app.put("/api/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tareas = tareas.map(t => t.id === id ? { ...t, titulo: req.body.titulo } : t);
  res.json({ ok: true });
});

// Eliminar tarea
app.delete("/api/tareas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tareas = tareas.filter(t => t.id !== id);
  res.json({ ok: true });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
