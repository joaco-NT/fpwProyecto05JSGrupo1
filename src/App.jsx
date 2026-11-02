import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}