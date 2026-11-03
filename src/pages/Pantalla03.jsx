import React from "react";
// 1. Importas la función que lee la memoria del servicio
import { obtenerResumenPartida } from "../services/estadoJuego";

const Pantalla03 = () => {
  // 2. Llamas a la función para extraer los datos guardados
  const { nombreJugador, puntajeJuego1, puntajeJuego2 } = obtenerResumenPartida();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🏆 Resultados Finales</h1>

      <p>Nombre del Jugador: <strong>{nombreJugador}</strong> </p>
      
      {/* 3. ¡Listo! Ya puedes mostrar el puntaje del Juego 1 en pantalla */}
      <p>Tu puntaje en el Juego 1 (¡Hora de Comer!): <strong>{puntajeJuego1} / 50</strong></p>
      <p>Tu puntaje en el Juego 2: <strong>{puntajeJuego2}</strong></p>
    </div>
  );
};

export default Pantalla03;