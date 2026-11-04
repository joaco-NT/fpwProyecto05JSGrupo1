// ==========================================
// ESTADO GLOBAL DE LA PARTIDA
// ==========================================

let memoriaPartida = {
  nombreJugador: "", // Guarda el nombre del usuario
  puntajeJuego1: 0,  // Guarda el puntaje de la Pantalla 02 (Juego 1)
  puntajeJuego2: 0,  // Guarda el puntaje de la Pantalla 03 (Juego 2)
  respuesta: 0,      // Propiedad para almacenar respuestas adicionales
};

// Función para guardar el nombre del niño
export const guardarNombreJugador = (nombre) => {
  memoriaPartida.nombreJugador = nombre;
};

// Función para guardar el puntaje del Juego 1
export const guardarPuntajeJuego1 = (puntaje) => {
  memoriaPartida.puntajeJuego1 = puntaje;
};

// Función para guardar el puntaje del Juego 2
export const guardarPuntajeJuego2 = (puntaje) => {
  memoriaPartida.puntajeJuego2 = puntaje;
};

// Función para guardar una respuesta
export const guardarRespuesta = (valorRespuesta) => {
  memoriaPartida.respuesta = valorRespuesta;
};

// Función para reiniciar los datos si juegan de nuevo (vuelven al Login)
export const reiniciarPartida = () => {
  memoriaPartida.nombreJugador = "";
  memoriaPartida.puntajeJuego1 = 0;
  memoriaPartida.puntajeJuego2 = 0;
  memoriaPartida.respuesta = 0;
};

// Función para obtener todo el resumen (incluyendo la suma total de los dos puntajes)
export const obtenerResumenPartida = () => {
  const sumaTotal = memoriaPartida.puntajeJuego1 + memoriaPartida.puntajeJuego2;

  return {
    ...memoriaPartida,
    puntajeTotal: sumaTotal
  };
};