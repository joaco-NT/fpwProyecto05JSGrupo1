
# 📋 Reporte de Progreso General - Proyecto 04

## 👤 Reporte de Progreso - Miembro 1

### 📒 Datos Generales
- **Estudiante:** Torrez Joaquin
- **Ejercicio Asignado:**
  - **Ejercicio 01:** Pantalla de Login (Validación y almacenamiento de nombre de usuario)
  - **Ejercicio 02:** Juego 1: ¡Hora de Comer! (Manejo de rondas, opciones aleatorias, puntaje y persistencia)

---

## Estructura de Vistas (pages/)


## 📄 `Pantalla01.jsx`:
Componente de la pantalla de login. Contiene la memoria del input de texto y errores, gestiona el inicio de sesión capturando el nombre del usuario y delegando su validación a `calculoPantalla01.js`. Importa `guardarNombreJugador` desde `estadoJuego.js` para almacenar el nombre procesado y utiliza el hook `useNavigate` de `react-router-dom` mediante `const navigate = useNavigate()` para redirigir de forma automática hacia `/juego` al completar con éxito el proceso, renderizando de forma limpia y las cajas visuales con el título, input y botón de comenzar.


## 📄 `Pantalla02.jsx`:
Componente del juego 1 ("¡Hora de Comer!"). Importa `guardarPuntajeJuego1` desde `estadoJuego.js` y el hook `useNavigate` de `react-router-dom` mediante `const navigate = useNavigate()` para gestionar la transición hacia `/juego2`. Al finalizar las rondas, guarda el puntaje final limitado a 50 puntos y alterna de manera fluida entre la interfaz de juego activo y la pantalla de finalización.

## 📄 `Pantalla03.jsx`:
Componente de resultados temporales. Extrae la información de la memoria global del servicio `estadoJuego.js` para mostrar el nombre del jugador y el puntaje acumulado en el Juego 1 sobre el total esperado.

## 🛠️ Servicios (services/)

## ⚙️ `calculoPantalla01.js:`

Implementa funciones para validar que la entrada sea de tipo texto, no esté vacía y contenga únicamente caracteres alfabéticos válidos:

esTipoTextoValido(valor): Verifica que el dato recibido sea estrictamente de tipo string.

esTextoNoVacio(texto): Limpia espacios en blanco con trim() y confirma que tenga longitud mayor a 0.

esSoloTextoAlfabetico(texto): Aplica expresión regular (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/) para asegurar que solo contenga letras, espacios y caracteres en español (sin números ni símbolos).

validarNombreJugador(nombre): Orquesta las tres funciones anteriores y retorna un objeto de respuesta con el estado de validación (valido), el mensaje de error correspondiente o el nombre procesado.

## `calculoPantalla02.js:`

Módulo encargado de barajar aleatoriamente las opciones de comida de cada ronda base, evaluar si la respuesta del usuario es correcta, calcular puntajes y preparar el formato de guardado seguro:

mezclarArray(array): Implementa el algoritmo de ordenamiento aleatorio (Fisher-Yates) para desordenar dinámicamente la lista de comidas en cada partida.

rondasJuego1: Arreglo de rondas base (Vaca, Gallina, Chancho, Oveja, Caballo) generado automáticamente con las opciones de comida previamente barajadas.

calcularPuntajeYValidacion(opcionElegida, opcionCorrecta, puntajeActual): Compara la opción seleccionada con la correcta, suma 10 puntos si acierta y asigna los mensajes ("🎉 Correcto..." / "❌ ¡Esa no es...") y clases CSS dinámicas (pantalla02__mensaje--correcto / pantalla02__mensaje--incorrecto).

prepararGuardadoFinal(puntajeFinal): Asegura la integridad del puntaje limitando el máximo a 50 puntos (Math.min) antes de almacenarlo.

## `⚙️ estadoJuego.js:`

Almacén de estado en memoria global de la partida. Permite registrar y recuperar de forma segura el nombre del jugador y los puntajes obtenidos en los distintos juegos:

memoriaPartida: Objeto global centralizado que actúa como fuente única de verdad para nombreJugador, puntajeJuego1 y puntajeJuego2.

guardarNombreJugador(nombre): Modifica la clave nombreJugador con la entrada validada de la Pantalla 01.

guardarPuntajeJuego1(puntaje): Registra el puntaje acumulado al finalizar las 5 rondas de la Pantalla 02.

obtenerResumenPartida(): Retorna una copia de todo el estado global para ser consumido en la Pantalla 04 (Resultados).

---

## 📁 Gestión de Archivos

- **Archivos Creados:**
  - `src/components/Boton.jsx`
  - `src/css/EstiloPantalla01.css`
  - `src/css/EstiloPantalla02.css`
  - `src/css/EstiloPantalla03.css`
  - `src/pages/Pantalla01.jsx`
  - `src/pages/Pantalla02.jsx`
  - `src/pages/Pantalla03.jsx`
  - `src/services/calculoPantalla01.js`
  - `src/services/calculoPantalla02.js`
  - `src/services/estadoJuego.js`
  - `src/app.jsx`
  - `src/main.jsx`
- **Archivos Modificados:**
  - `src/components/Boton.jsx`
  - `src/css/EstiloPantalla01.css`
  - `src/css/EstiloPantalla02.css`
  - `src/css/EstiloPantalla03.css`
  - `src/pages/Pantalla01.jsx`
  - `src/pages/Pantalla02.jsx`
  - `src/pages/Pantalla03.jsx`
  - `src/app.jsx`
  - `src/main.jsx`
- **Archivos Eliminados:** N/A


---

## 🤖 Uso de Inteligencia Artificial

- **Uso de IA:**
  - [x] Sí
  - [ ] No

- **Forma de uso:** 
  - [ ] **Autogeneración IA:** Código completo hecho por la IA para copiar y pegar.
  - [ ] **Alto (Copiloto):** Trabajo en equipo constante con la IA.
  - [x] **Medio (Guía):** Consulta para resolver dudas y corregir errores.
  - [ ] **Bajo (Consulta puntual):** Ayuda rápida para resolver dudas menores.

# 📋 Reporte de Progreso General - Proyecto 04

## 👤 Reporte de Progreso - Miembro 2

### 📒 Datos Generales
- **Estudiante:** Gastón Flores
- **Ejercicio Asignado:**
  - **Ejercicio 03:** Juego 2: El Intruso de la Granja (Manejo de rondas, selección de animales, validación de respuestas y puntaje).
  - **Ejercicio 04:** Pantalla de resumen final (Visualización de puntajes y resultado total de la partida).


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


- **Forma de uso:**
  - [ ] **Autogeneración IA:** Código completo hecho por la IA para copiar y pegar.
  - [x] **Alto (Copiloto):** Trabajo en equipo constante con la IA.
  - [ ] **Medio (Guía):** Consulta para resolver dudas y corregir errores.
  - [ ] **Bajo (Consulta puntual):** Ayuda rápida para resolver dudas menores.



