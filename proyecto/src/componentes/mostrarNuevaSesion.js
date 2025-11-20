import { cargarEjercicios } from './nuevaSesion.js'; // si separas archivos ajusta la ruta

export default async function mostrarNuevaSesion() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Nueva sesión de boxeo</h2>
    <label>Ejercicio principal:</label>
    <select id="selectEjercicio"></select><br>

    <label>Duración (minutos):</label>
    <input type="number" id="duracion"><br>

    <label>Intensidad (1–5):</label>
    <input type="number" id="intensidad" min="1" max="5"><br>

    <label>¿Qué mejoraste hoy?</label><br>
    <textarea id="nota" rows="4"></textarea><br>

    <button id="btnGuardarSesion">Guardar sesión</button>
  `;

  // 1) Cargar ejercicios desde tu “API”
  const ejercicios = await cargarEjercicios();

  const select = document.getElementById('selectEjercicio');
  ejercicios.forEach((ej) => {
    const option = document.createElement('option');
    option.value = ej.id;
    option.textContent = `${ej.nombre} (${ej.categoria})`;
    select.appendChild(option);
  });

  // 2) Capturar datos de la sesión (luego los mandas a Firebase)
  document.getElementById('btnGuardarSesion').addEventListener('click', () => {
    const sesion = {
      ejercicioId: select.value,
      duracion: Number(document.getElementById('duracion').value),
      intensidad: Number(document.getElementById('intensidad').value),
      nota: document.getElementById('nota').value
    };

    console.log('Sesión guardada (todavía local):', sesion);
    alert('Sesión registrada (falta conectarla a Firebase) 😉');
  });
}