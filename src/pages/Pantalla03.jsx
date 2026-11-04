import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";
import { rondasJuego2, calcularPuntajeYValidacionJuego2 } from "../services/calculoPantalla03";
import { guardarPuntajeJuego2 } from "../services/estadoJuego";
import "../css/EstiloPantalla03.css";

const Pantalla03 = () => {
  const navigate = useNavigate();

  // --- A. Memoria ---
  const [indiceRonda, setIndiceRonda] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [retroalimentacion, setRetroalimentacion] = useState({ mensaje: "", claseCSS: "" });
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const rondaActual = rondasJuego2[indiceRonda];

  // --- B. Acciones ---
  const manejarRespuesta = (opcionTexto) => {
    const resultado = calcularPuntajeYValidacionJuego2(opcionTexto, rondaActual.correcta, puntaje);
    
    setPuntaje(resultado.nuevoPuntaje);
    setRetroalimentacion({ mensaje: resultado.mensaje, claseCSS: resultado.claseCSS });

    setTimeout(() => {
      setRetroalimentacion({ mensaje: "", claseCSS: "" });
      
      if (indiceRonda + 1 < rondasJuego2.length) {
        setIndiceRonda(indiceRonda + 1);
      } else {
        setJuegoTerminado(true);
        guardarPuntajeJuego2(Math.min(resultado.nuevoPuntaje, 50));
      }
    }, 3500);
  };

  const manejarIrAResultados = () => {
    navigate("/resultados");
  };

  // --- C. Efectos ---
  useEffect(() => {
    document.body.classList.add("body-pantalla03");
    return () => document.body.classList.remove("body-pantalla03");
  }, []);

  // --- MAPA DE ESTADOS ---
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
        alHacerClick={manejarIrAResultados} 
      />
    )
  };

  return (
    <main className="pantalla03">
      {estructurasPorEstado[juegoTerminado ? "terminado" : "activo"]}
    </main>
  );
};

// ==========================================
// PIEZAS VISUALES AUXILIARES
// ==========================================

const EstructuraJuegoActivo = ({ rondaActual, retroalimentacion, manejarRespuesta }) => (
  <>
    {/* Caja 1: Título */}
    <header className="pantalla03__caja-general">
      <h1 className="pantalla03__titulo">Juego 2: El Intruso de la Granja</h1>
    </header>

    {/* Caja 2: Instrucción y 3 animales en fila */}
    <section className="pantalla03__caja-general">
      <p className="pantalla03__pregunta">¡Hay un intruso! Haz clic en el que NO es de la granja:</p>
      
      <div className="pantalla03__grupo-botones">
        {rondaActual.opciones.map((opcionTexto, index) => (
          <Boton 
            key={index} 
            texto={opcionTexto} 
            disabled={Boolean(retroalimentacion.mensaje)} 
            alHacerClick={() => manejarRespuesta(opcionTexto)} 
            claseCSS="pantalla03__boton-opcion"
          />
        ))}
      </div>

      {retroalimentacion.mensaje && (
        <p className={`pantalla03__mensaje ${retroalimentacion.claseCSS}`}>
          {retroalimentacion.mensaje}
        </p>
      )}
    </section>
  </>
);

const EstructuraJuegoTerminado = ({ puntaje, alHacerClick }) => (
  <>
    <header className="pantalla03__caja-general">
      <h1 className="pantalla03__titulo">🎉 ¡Juego 2 terminado!</h1>
    </header>

    <section className="pantalla03__caja-general">
      <p className="pantalla03__texto">Puntaje final: {puntaje} / 50</p>
    </section>

    <section className="pantalla03__caja-general">
      <p className="pantalla03__pregunta">¡Mirá tus resultados finales!</p>
      <Boton 
        texto="Ver Resultados 🏆" 
        alHacerClick={alHacerClick} 
        claseCSS="pantalla03__boton-siguiente"
      />
    </section>
  </>
);

export default Pantalla03;