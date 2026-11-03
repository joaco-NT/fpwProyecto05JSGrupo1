import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 👈 
import Boton from "../components/Boton";
import { rondasJuego1, calcularPuntajeYValidacion } from "../services/calculoPantalla02";
import { guardarPuntajeJuego1 } from "../services/estadoJuego"; // 👈 
import "../css/EstiloPantalla02.css";

const Pantalla02 = () => {
  const navigate = useNavigate(); // 👈 

  // --- A. Memoria ---
  const [indiceRonda, setIndiceRonda] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [retroalimentacion, setRetroalimentacion] = useState({ mensaje: "", claseCSS: "" });
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const rondaActual = rondasJuego1[indiceRonda];

  // --- B. Acciones ---
  const manejarRespuesta = (opcionTexto) => {
    const resultado = calcularPuntajeYValidacion(opcionTexto, rondaActual.correcta, puntaje);
    
    setPuntaje(resultado.nuevoPuntaje);
    setRetroalimentacion({ mensaje: resultado.mensaje, claseCSS: resultado.claseCSS });

    setTimeout(() => {
      setRetroalimentacion({ mensaje: "", claseCSS: "" });
      
      if (indiceRonda + 1 < rondasJuego1.length) {
        setIndiceRonda(indiceRonda + 1);
      } else {
        setJuegoTerminado(true);
        guardarPuntajeJuego1(Math.min(resultado.nuevoPuntaje, 50)); // 👈 
      }
    }, 3500);
  };

  const manejarSiguienteJuego = () => { // 👈 
    navigate("/juego2");
  };

  // --- C. Efectos ---
  useEffect(() => {
    document.body.classList.add("body-pantalla02");
    return () => document.body.classList.remove("body-pantalla02");
  }, []);

  /* ==========================
     MAPA DE ESTADOS 
     ========================== */
  const estructurasPorEstado = {
    activo: (
      <EstructuraJuegoActivo 
        rondaActual={rondaActual} 
        retroalimentacion={retroalimentacion} 
        manejarRespuesta={manejarRespuesta} 
      />
    ),
    terminado: (
      <EstructuraJuegoTerminado 
        puntaje={puntaje} 
        alHacerClick={manejarSiguienteJuego} 
      />
    )
  };

  /* ==========================
     ESCENARIO (Solo Muestra)
     ========================== */
  return (
    <main className="pantalla02">
      {estructurasPorEstado[juegoTerminado ? "terminado" : "activo"]}
    </main>
  );
};

// ==========================================
// PIEZAS VISUALES AUXILIARES
// ==========================================

// ESTRUCTURA 1: Cuando el juego está ACTIVO
const EstructuraJuegoActivo = ({ rondaActual, retroalimentacion, manejarRespuesta }) => (
  <>
    {/* Caja 1: Título */}
    <header className="pantalla02__caja-general">
      <h1 className="pantalla02__titulo">Juego 1: ¡Hora de Comer!</h1>
    </header>

    {/* Caja 2: Muestra Animal */}
    <section className="pantalla02__caja-general">
      <span className="pantalla02__emoji-animal">
        {`${rondaActual.emoji} ${rondaActual.animal}`}
      </span>
    </section>

    {/* Caja 3: Interacción, Opciones y Retroalimentación */}
    <section className="pantalla02__caja-general">
      <p className="pantalla02__pregunta">Elige la comida correcta:</p>

      <div className="pantalla02__grupo-botones">
        {rondaActual.opciones.map((opcionTexto, index) => (
          <Boton 
            key={index} 
            texto={opcionTexto} 
            disabled={Boolean(retroalimentacion.mensaje)} 
            alHacerClick={() => manejarRespuesta(opcionTexto)} 
            claseCSS="pantalla02__boton-opcion"
          />
        ))}
      </div>

      {retroalimentacion.mensaje && (
        <p className={`pantalla02__mensaje ${retroalimentacion.claseCSS}`}>
          {retroalimentacion.mensaje}
        </p>
      )}
    </section>
  </>
);

// ESTRUCTURA 2: Cuando el juego está TERMINADO
const EstructuraJuegoTerminado = ({ puntaje, alHacerClick }) => (
  <>
    {/* Caja 1: Título de fin */}
    <header className="pantalla02__caja-general">
      <h1 className="pantalla02__titulo">🎉 ¡Juego terminado!</h1>
    </header>

    {/* Caja 2: Puntaje final */}
    <section className="pantalla02__caja-general">
      <p className="pantalla02__texto">Puntaje final: {puntaje} / 50</p>
    </section>

    {/* Caja 3: Acción de salida */}
    <section className="pantalla02__caja-general">
      <p className="pantalla02__pregunta">¿Listo para el siguiente reto?</p>
      <Boton 
        texto="Siguiente 🚀" 
        alHacerClick={alHacerClick} 
        claseCSS="pantalla02__boton-siguiente"
      />
    </section>
  </>
);

export default Pantalla02;