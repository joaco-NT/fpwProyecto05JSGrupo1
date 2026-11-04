

# 📋 Reporte de Progreso General - Proyecto 04

## 👤 Reporte de Progreso - Miembro 2

### 📒 Datos Generales
- **Estudiante:** Gastón Flores
- **Ejercicio Asignado:**
  - **Ejercicio 03:** Juego 2: El Intruso de la Granja (Manejo de rondas, selección de animales, validación de respuestas y puntaje).
  - **Ejercicio 04:** Pantalla de resumen final (Visualización de puntajes y resultado total de la partida).

---

## Estructura de Vistas (pages/)

### 📄 `Pantalla03.jsx`:
Componente correspondiente al segundo juego de la aplicación, denominado "El Intruso de la Granja". Gestiona el desarrollo de las rondas mediante hooks de React como `useState` y `useEffect`, y utiliza `useNavigate` de `react-router-dom` para controlar la navegación.

El componente presenta diferentes grupos de animales y permite al jugador identificar cuál es el intruso. Al seleccionar una respuesta, valida si es correcta, muestra una retroalimentación visual y actualiza el puntaje. Al finalizar las rondas, guarda el puntaje obtenido mediante `guardarPuntajeJuego2` desde `estadoJuego.js` y redirige a la pantalla de resumen final.

### 📄 `Pantalla04.jsx`:
Componente encargado de mostrar el resumen final de la partida. Recupera los datos almacenados en el servicio `estadoJuego.js` mediante `obtenerResumenPartida()`.

Presenta el nombre del jugador, los puntajes obtenidos en ambos juegos y el puntaje total sobre 100 puntos. También muestra un mensaje de felicitación según el desempeño del jugador y permite reiniciar la partida mediante un botón que limpia los datos guardados y redirige a la pantalla inicial.

---

## 🛠️ Servicios (services/)

### ⚙️ `calculoPantalla03.js`:
Módulo encargado de centralizar la lógica del Juego 2, "El Intruso de la Granja".

- **rondasJuego2:** Arreglo que contiene las rondas del juego, con grupos de animales y la respuesta correcta.
- **calcularPuntajeYValidacion(opcionElegida, opcionCorrecta, puntajeActual):** Evalúa si el animal seleccionado es el intruso, determina si la respuesta es correcta y actualiza el puntaje.
- **prepararGuardadoFinal(puntajeFinal):** Controla el puntaje final para asegurar que no supere los 50 puntos establecidos como máximo para el juego.

### ⚙️ `estadoJuego.js`:
Servicio encargado de almacenar los datos generales de la partida en memoria.

Se utiliza para conservar el nombre del jugador y los puntajes obtenidos durante los juegos.

- **guardarNombreJugador(nombre):** Almacena el nombre del jugador.
- **guardarPuntajeJuego1(puntaje):** Registra el puntaje obtenido en el primer juego.
- **guardarPuntajeJuego2(puntaje):** Registra el puntaje obtenido en el segundo juego.
- **obtenerResumenPartida():** Devuelve una copia de los datos de la partida para que la pantalla de resultados pueda utilizarlos.
- **reiniciarPartida():** Restablece los datos de la partida para comenzar nuevamente.

---

## 📁 Gestión de Archivos

### Archivos Creados:
- `src/css/EstiloPantalla03.css`
- `src/css/EstiloPantalla04.css`
- `src/pages/Pantalla03.jsx`
- `src/pages/Pantalla04.jsx`
- `src/services/calculoPantalla03.js`

### Archivos Modificados:
- `src/services/estadoJuego.js`

### Archivos Eliminados:
- N/A

---

## 🤖 Uso de Inteligencia Artificial

- **Uso de IA:**
  - [x] Sí
  - [ ] No

- **Forma de uso:**
  - [ ] **Autogeneración IA:** Código completo hecho por la IA para copiar y pegar.
  - [x] **Alto (Copiloto):** Trabajo en equipo constante con la IA.
  - [ ] **Medio (Guía):** Consulta para resolver dudas y corregir errores.
  - [ ] **Bajo (Consulta puntual):** Ayuda rápida para resolver dudas menores.
