import "./styles/Usuarios.css";
import { Link } from "react-router-dom";

interface UsuarioProps {
    nombre: string;
    email: string;
    telefono: string;
}

export default function Usuarios() {
    return (
        <div className="usuarios-container">
            <h2 className="usuarios-title">Mi Usuario</h2>
            <p className="usuarios-subtitle">Revisa tus datos personales</p>
            {/* Datos quemados */}
            <div className="usuarios-list">
                <UsuarioInfo nombre="Usuario" email="usuario@yopmail.com" telefono="123456789" />
            </div>
            <div className="usuarios-botones">
                <Link to="/usuarios/editar-datos" className="usuarios-modificar-btn">Editar Datos</Link>
                <Link to="/usuarios/progresos" className="usuarios-ver-progreso-btn">Ver mi Progreso</Link>
            </div>
        </div>
    );
}

const UsuarioInfo: React.FC<UsuarioProps> = ({ nombre, email, telefono }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '350px',
            margin: '20px auto',
            background: '#fff',
            color: '#333',
        }}>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Teléfono:</strong> {telefono}</p>
        </div>
    );
};