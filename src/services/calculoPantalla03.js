
// ==========================================
// SERVICIOS Y LÓGICA DEL JUEGO 2 (EL INTRUSO)
// ==========================================

const mezclarArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Rondas oficiales exactas según la consigna
const rondasBaseJuego2 = [
  { id: 1, opciones: ["🐶 Perro", "🐱 Gato", "🦁 León"], correcta: "🦁 León" },
  { id: 2, opciones: ["🐮 Vaca", "🐑 Oveja", "🐊 Cocodrilo"], correcta: "🐊 Cocodrilo" },
  { id: 3, opciones: ["🐔 Gallina", "🐷 Chancho", "🐘 Elefante"], correcta: "🐘 Elefante" },
  { id: 4, opciones: ["🐎 Caballo", "🐮 Vaca", "🦈 Tiburón"], correcta: "🦈 Tiburón" },
  { id: 5, opciones: ["🐑 Oveja", "🐶 Perro", "🐧 Pingüino"], correcta: "🐧 Pingüino" }
];

export const rondasJuego2 = rondasBaseJuego2.map((ronda) => ({
  ...ronda,
  opciones: mezclarArray(ronda.opciones)
}));

export function calcularPuntajeYValidacionJuego2(opcionElegida, opcionCorrecta, puntajeActual) {
  const esCorrecta = opcionElegida === opcionCorrecta;
  const puntosGanados = esCorrecta ? 10 : 0;
  
  return {
    esCorrecta,
    nuevoPuntaje: puntajeActual + puntosGanados,
    mensaje: esCorrecta 
      ? "🎉 ¡Sacaste al intruso! La granja está a salvo." 
      : "❌ Incorrecto. Ese sí es de la granja.",
    claseCSS: esCorrecta ? "pantalla03__mensaje--correcto" : "pantalla03__mensaje--incorrecto"
  };
}