
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Boton from "../components/Boton";

import {
  obtenerResumenPartida,
  reiniciarPartida,
} from "../services/estadoJuego";

import "../css/EstiloPantalla04.css";

const Pantalla04 = () => {
  const navigate = useNavigate();

  // ==========================================
  // A. MEMORIA
  // ==========================================

  const resumen = obtenerResumenPartida();

  const nombre = resumen.nombreJugador;

  const puntajeJuego1 = resumen.puntajeJuego1;

  const puntajeJuego2 = resumen.puntajeJuego2;

  const puntajeTotal = puntajeJuego1 + puntajeJuego2;

  // ==========================================
  // B. ACCIONES
  // ==========================================

  const manejarJugarDeNuevo = () => {
    reiniciarPartida();

    navigate("/");
  };

  // ==========================================
  // C. EFECTOS
  // ==========================================

  useEffect(() => {
    document.body.classList.add("body-pantalla04");

    return () => {
      document.body.classList.remove("body-pantalla04");
    };
  }, []);

  // ==========================================
  // D. MENSAJE PERSONALIZADO
  // ==========================================

  const obtenerMensajeFelicitacion = () => {
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
  };

  // ==========================================
  // E. ESCENARIO
  // ==========================================

  return (
    <main className="pantalla04">

      {/* Caja 1: Título */}

      <header className="pantalla04__caja-general">
        <h1 className="pantalla04__titulo">
          🏆 ¡Aventura completada!
        </h1>

        <p className="pantalla04__nombre">
          ¡Felicitaciones, {nombre}!
        </p>
      </header>

      {/* Caja 2: Puntajes */}

      <section className="pantalla04__caja-general">
        <h2 className="pantalla04__subtitulo">
          Tus resultados
        </h2>

        <div className="pantalla04__resultado">
          <span>🐮 Juego 1: ¡Hora de Comer!</span>

          <strong>
            {puntajeJuego1} / 50 puntos
          </strong>
        </div>

        <div className="pantalla04__resultado">
          <span>🦁 Juego 2: El Intruso de la Granja</span>

          <strong>
            {puntajeJuego2} / 50 puntos
          </strong>
        </div>

        <div className="pantalla04__resultado-total">
          <span>⭐ Puntaje total</span>

          <strong>
            {puntajeTotal} / 100 puntos
          </strong>
        </div>
      </section>

      {/* Caja 3: Felicitación */}

      <section className="pantalla04__caja-general">
        <p className="pantalla04__felicitacion">
          {obtenerMensajeFelicitacion()}
        </p>
      </section>

      {/* Caja 4: Volver a jugar */}

      <section className="pantalla04__caja-general">
        <Boton
          texto="¡Jugar de nuevo! 🚀"
          alHacerClick={manejarJugarDeNuevo}
          claseCSS="pantalla04__boton-reiniciar"
        />
      </section>

    </main>

export default Pantalla04;