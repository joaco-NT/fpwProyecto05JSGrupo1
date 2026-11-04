import { Outlet, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import "./css/transiciones.css"; // Tu archivo CSS de arriba

export default function App() {
  const location = useLocation(); // Detecta la ruta actual

  return (
    <Container>
      {/* La key hace que React "reinicie" el componente y dispare la animación en cada cambio de ruta */}
      <div key={location.pathname} className="transicion-pagina">
        <Outlet />
      </div>
    </Container>
  );
}