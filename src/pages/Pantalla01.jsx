import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";
import { guardarNombreJugador } from "../services/estadoJuego";
import { validarNombreJugador } from "../services/calculoPantalla01";
import "../css/EstiloPantalla01.css";

const Pantalla01 = () => {
  const navigate = useNavigate();

  // --- A. Memoria ---
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  // --- B. Acciones ---
  const manejarCambioInput = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    if (error) setError("");
  };

  const manejarComenzar = () => {
    // Procesamos la lógica a través del archivo de cálculos (Ciego al DOM)
    const resultado = validarNombreJugador(nombre);

    if (!resultado.valido) {
      setError(resultado.error);
      return;
    }

    guardarNombreJugador(resultado.nombreProcesado);
    navigate("/juego1");
  };

  // --- C. Efectos ---
  useEffect(() => {
    document.body.classList.add("body-pantalla01");
    return () => document.body.classList.remove("body-pantalla01");
  }, []);

  /* ==========================
     ESCENARIO (Solo Muestra)
     ========================== */
  return (
    <main className="pantalla01">
      {/* Caja 1: Título */}
      <header className="pantalla01__caja-general">
        <h1 className="pantalla01__titulo">🏡 ¡Aventura en la Granja!</h1>
      </header>

      {/* Caja 2: Input de nombre y error */}
      <section className="pantalla01__caja-general">
        <p className="pantalla01__pregunta">¿Cómo te llamas?</p>
        
        <input 
          type="text" 
          value={nombre}
          onChange={manejarCambioInput}
          placeholder="Tu nombre aquí..."
          className="pantalla01__input-nombre"
        />

        {error && <p className="pantalla01__error">{error}</p>}
      </section>

      {/* Caja 3: Acción de inicio */}
      <section className="pantalla01__caja-general">
        <Boton 
          texto="¡Comenzar! 🚀" 
          alHacerClick={manejarComenzar} 
          claseCSS="pantalla01__boton-comenzar"
        />
      </section>
    </main>
  );
};

export default Pantalla01;