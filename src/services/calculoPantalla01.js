// ==========================================
// CÁLCULOS PANTALLA 01
// ==========================================

function esTipoTextoValido(valor) {
  return typeof valor === "string";
}

function esTextoNoVacio(texto) {
  return texto.trim().length > 0;
}

function esSoloTextoAlfabetico(texto) {
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(texto);
}

export function validarNombreJugador(nombre) {
  if (!esTipoTextoValido(nombre)) {
    return {
      valido: false,
      error: "¡Ups! El formato ingresado no es válido 🐾",
      nombreProcesado: ""
    };
  }

  const nombreLimpio = nombre.trim();

  if (!esTextoNoVacio(nombreLimpio)) {
    return {
      valido: false,
      error: "¡Ups! Escribe tu nombre para empezar 🐾",
      nombreProcesado: ""
    };
  }

  if (!esSoloTextoAlfabetico(nombreLimpio)) {
    return {
      valido: false,
      error: "¡Ups! Tu nombre solo puede contener letras 🐾",
      nombreProcesado: ""
    };
  }

  return {
    valido: true,
    error: "",
    nombreProcesado: nombreLimpio
  };
}