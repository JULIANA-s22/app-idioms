import "./styles/Cursos.css";

export default function Cursos() {

  const cursos = [
    { id: 1, nombre: "Inglés Básico", progreso: 70 },
    { id: 2, nombre: "Inglés Intermedio", progreso: 45 },
    { id: 3, nombre: "Inglés Avanzado", progreso: 20 },
    { id: 3, nombre: "Inglés Avanzado", progreso: 20 },
  ];

  return (
    <div className="cursos-container">
      <h2 className="cursos-title">Mis Cursos</h2>
      <p className="cursos-subtitle">Revisa tu progreso en cada nivel</p>

      <div className="cursos-list">
        {cursos.map((curso) => (
          <div key={curso.id} className="curso-card">
            <h3 className="curso-nombre">{curso.nombre}</h3>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${curso.progreso}%` }}
              ></div>
            </div>
            <p className="curso-progreso">{curso.progreso}% completado</p>
          </div>
        ))}
      </div>
    </div>
  );
}
