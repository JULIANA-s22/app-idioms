import "./styles/Cursos.css";

type Curso = {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
};

const cursos: Curso[] = [
  {
    id: 1,
    titulo: 'Inglés Experto',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 2,
    titulo: 'Portugués Intermedio',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 3,
    titulo: 'Alemán Básico',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 4,
    titulo: 'Francés Avanzado',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 5,
    titulo: 'Italiano Intermedio',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 6,
    titulo: 'Ruso Avanzado',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 4,
    titulo: 'Coreano Básico',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 5,
    titulo: 'Japonés Básico',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  },
  {
    id: 6,
    titulo: 'Mandarín Básico',
    descripcion: 'Descripción del curso',
    duracion: '10 horas',
  }
];

export default function Cursos() {
  return (
    <div>
      <h2 className="cursos-progreso-title">Cursos Disponibles</h2>
      <div className="cursos-container">
        <div className="cursos-container">
          {cursos.map((curso) => (
            <div key={curso.id} className="curso-card">
              <h2>{curso.titulo}</h2>
              <p>{curso.descripcion}</p>
              <p><strong>Duracion:</strong> {curso.duracion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}