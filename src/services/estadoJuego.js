
let memoriaPartida = {
  nombreJugador: "", // guarda el nombre de usuario
  puntajeJuego1: 0, // guarda el puntoaje de pantalla01.jsx
  puntajeJuego2: 0, 
};

// Función para guardar el nombre del niño
export const guardarNombreJugador = (nombre) => {
  memoriaPartida.nombreJugador = nombre;
};

// Función para guardar el puntaje del Juego 1
export const guardarPuntajeJuego1 = (puntaje) => {
  memoriaPartida.puntajeJuego1 = puntaje;
};


// Función para obtener todo el resumen al final
export const obtenerResumenPartida = () => {
  return memoriaPartida;
};