// ==========================================
// SERVICIOS Y LÓGICA DEL JUEGO 1
// ==========================================

// Responsabilidad única: Mezclar aleatoriamente los elementos de un arreglo (para las opciones de comida)
const mezclarArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Datos base de las rondas del juego
const rondasBase = [
  { id: 1, animal: "Vaca", emoji: "🐄", opciones: ["Pasto", "Carne", "Banana"], correcta: "Pasto" },
  { id: 2, animal: "Gallina", emoji: "🐔", opciones: ["Maíz", "Pasto", "Pescado"], correcta: "Maíz" },
  { id: 3, animal: "Chancho", emoji: "🐷", opciones: ["Todo", "Solo Pasto", "Solo Carne"], correcta: "Todo" },
  { id: 4, animal: "Oveja", emoji: "🐑", opciones: ["Pasto", "Hamburguesa", "Pizza"], correcta: "Pasto" },
  { id: 5, animal: "Caballo", emoji: "🐎", opciones: ["Pasto y Zanahoria", "Pollo", "Helado"], correcta: "Pasto y Zanahoria" }
];

// Responsabilidad única: Generar las rondas oficiales barajando las opciones de comida en cada una
export const rondasJuego1 = rondasBase.map((ronda) => ({
  ...ronda,
  opciones: mezclarArray(ronda.opciones)
}));

// Responsabilidad única: Validar si la respuesta del usuario es correcta, calcular el nuevo puntaje y definir mensajes y estilos visuales
export function calcularPuntajeYValidacion(opcionElegida, opcionCorrecta, puntajeActual) {
  const esCorrecta = opcionElegida === opcionCorrecta;
  const puntosGanados = esCorrecta ? 10 : 0;
  
  return {
    esCorrecta,
    nuevoPuntaje: puntajeActual + puntosGanados,
    mensaje: esCorrecta ? "🎉 Correcto. ¡El animal comió!" : "❌ ¡Esa no es su comida!",
    claseCSS: esCorrecta ? "pantalla02__mensaje--correcto" : "pantalla02__mensaje--incorrecto"
  };
}

// Responsabilidad única: Preparar y limitar el puntaje final antes de guardarlo en la memoria global
export function prepararGuardadoFinal(puntajeFinal) {
  const puntajeAjustado = Math.min(puntajeFinal, 50);
  return { clave: "puntajeJuego1", valor: puntajeAjustado };
}