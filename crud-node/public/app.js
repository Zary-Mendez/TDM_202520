async function cargarTareas() {
  try {
    const res = await fetch("/api/tareas");
    const tareas = await res.json();

    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";

    tareas.forEach(tarea => {
      const li = document.createElement("li");
      li.textContent = tarea.titulo;

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "✏️";
      btnEditar.onclick = async () => {
        const nuevoTitulo = prompt("Editar tarea:", tarea.titulo);
        if (nuevoTitulo) {
          await fetch(`/api/tareas/${tarea.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo: nuevoTitulo })
          });
          cargarTareas();
        }
      };

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "❌";
      btnEliminar.onclick = async () => {
        await fetch(`/api/tareas/${tarea.id}`, { method: "DELETE" });
        cargarTareas();
      };

      li.appendChild(btnEditar);
      li.appendChild(btnEliminar);
      listaTareas.appendChild(li);
    });
  } catch (error) {
    console.error("Error cargando tareas:", error);
  }
}

cargarTareas();


