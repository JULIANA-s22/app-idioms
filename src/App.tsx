
import Layout from "../src/components/Layout/layout";
import Cursos from "../src/components/Cursos/Cursos";
import AuthGuard from "./AuthGuard";

export default function App() {
  return (
    <AuthGuard>
      <Layout>
        <Cursos />
      </Layout>
    </AuthGuard>
  );
}
