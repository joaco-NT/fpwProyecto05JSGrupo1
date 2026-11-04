// ==========================================
// CÁLCULOS Y LÓGICA DE PANTALLA 04 (RESULTADOS)
// ==========================================

// Responsabilidad única: Generar el mensaje de felicitación personalizado según el puntaje total (hasta 100)
export function obtenerMensajeFelicitacion(puntajeTotal, nombreJugador) {
  const nombre = nombreJugador && nombreJugador.trim() !== "" ? nombreJugador : "explorador";

  if (puntajeTotal === 100) {
    return `¡Increíble ${nombre}! ¡Conseguiste el puntaje perfecto!`;
  }

  if (puntajeTotal >= 80) {
    return `¡Excelente trabajo, ${nombre}! Sos un gran explorador.`;
  }

  if (puntajeTotal >= 60) {
    return `¡Muy bien, ${nombre}! Aprendiste un montón.`;
  }

  if (puntajeTotal >= 40) {
    return `¡Buen trabajo, ${nombre}! Seguí practicando.`;
  }

  return `¡Gracias por jugar, ${nombre}! ¡La próxima aventura te espera!`;
}

// Responsabilidad única: Validar y normalizar los puntajes antes de mostrarlos en la vista
export function validarPuntajesFinales(puntaje1, puntaje2) {
  const p1 = typeof puntaje1 === "number" && !isNaN(puntaje1) ? puntaje1 : 0;
  const p2 = typeof puntaje2 === "number" && !isNaN(puntaje2) ? puntaje2 : 0;

  return {
    puntajeJuego1: p1,
    puntajeJuego2: p2,
    puntajeTotal: p1 + p2
  };
}