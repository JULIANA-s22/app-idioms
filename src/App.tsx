
import Layout from "../src/components/Layout/layout";
import Cursos from "../src/components/Cursos/Cursos";
import Usuarios from "../src/components/Usuarios/Usuarios";
import Progresos from "../src/components/Progresos/Progresos";
import AuthGuard from "./AuthGuard";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <AuthGuard>
      <Layout>
        <Routes>
          <Route path="/" element={<Cursos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/progresos" element={<Progresos />} />
          {/* <Route path="/usuarios/editar-datos" element={<EditarDatos />} /> */}
        </Routes>
      </Layout>
    </AuthGuard>
  );
}
