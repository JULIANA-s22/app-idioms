import "./styles/Progresos.css";

export default function Progresos() {

  const cursosProgreso = [
    { id: 1, nombre: "Nivel Básico", progreso: 90 },
    { id: 2, nombre: "Nivel Intermedio", progreso: 75 },
    { id: 3, nombre: "Nivel Avanzado", progreso: 50 },
    { id: 4, nombre: "Nivel Experto", progreso: 25 },
  ];

  return (
    <div className="cursos-progreso-container">
      <h2 className="cursos-progreso-title">Mis Progresos</h2>
      <p className="cursos-progreso-subtitle">Revisa tu progreso en cada nivel de inglés</p>
      <div className="cursos-progreso-list">
        {cursosProgreso.map((cursoProgreso) => (
          <div key={cursoProgreso.id} className="curso-progreso-card">
            <h3 className="curso-progreso-nombre">{cursoProgreso.nombre}</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${cursoProgreso.progreso}%` }}
              ></div>
            </div>
            <p className="porcentaje-progreso">{cursoProgreso.progreso}% completado</p>
          </div>
        ))}
      </div>
    </div>
  );
}
