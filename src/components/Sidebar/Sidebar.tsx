
import { useState } from "react";
import "./styles/Sidebar.css";
import logo from "../../assets/icon-app.png";
import { FaHome, FaCalendarAlt, FaCog, FaUser, FaSchool } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

export default function Sidebar() {

  const [open, setOpen] = useState(true);
  const { user, isAuthenticated } = useAuth0();

  let initials = "";
  let email = "";
  if (isAuthenticated && user && user.email) {
    email = user.email;
    const namePart = email.split("@")[0];
    const parts = namePart.split(/[._-]/).filter(Boolean);
    if (parts.length === 1) {
      initials = parts[0].slice(0, 2).toUpperCase();
    } else {
      initials = parts.map(p => p[0]).join("").slice(0, 2).toUpperCase();
    }
  }

  return (
    <aside className={`sidebar-modern ${open ? "open" : "collapsed"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="sidebar-logo" />
        {open && <h2 className="sidebar-title">LinguaBoost</h2>}
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/usuarios">
              <FaUser />
              <span>User</span>
            </Link>
          </li>
          <li>
            <Link to="/cursos">
              <FaSchool />
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/schedule">
              <FaCalendarAlt />
              <span>Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <FaMessage />
              <span>Notification</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-user">
        {isAuthenticated && user && user.email ? (
          <>
            <div
              className="sidebar-avatar"
              style={{
                background: "#6e8fd4",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
                width: 40,
                height: 40,
                borderRadius: "100%"
              }}
            >
              {initials}
            </div>
            {open && (
              <div>
                <p className="user-name">{user.email}</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="sidebar-avatar" style={{ background: "#eee" }} />
            {open && (
              <div>
                <p className="user-name">Invitado</p>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
