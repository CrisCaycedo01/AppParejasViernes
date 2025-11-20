export async function cargarEjercicios() {
  const response = await fetch('/ejercicios-boxeo.json'); // viene de /public
  const ejercicios = await response.json();
  return ejercicios;
}