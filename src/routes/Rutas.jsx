import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";

import Pantalla01 from "../pages/Pantalla01.jsx";
import Pantalla02 from "../pages/Pantalla02.jsx";
import Pantalla03 from "../pages/Pantalla03.jsx";
import Pantalla04 from "../pages/Pantalla04.jsx";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Pantalla01 />,
      },
      {
        path: "juego1",
        element: <Pantalla02 />,
      },
      {
        path: "juego2",
        element: <Pantalla03 />,
      },
      {
        path: "resumen",
        element: <Pantalla04 />,
      },
    ],
  },
]);