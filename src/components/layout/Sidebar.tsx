import { NavLink } from 'react-router-dom';
import '../../styles/sidebar.css';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserInjured } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { GiHospitalCross } from "react-icons/gi";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <h1 style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}><GiHospitalCross /> </h1>
            <h3 style={{ display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', marginBottom: 0 }}>Clinic Pro</h3>
          </div>
          <p style={{ padding: '1rem' }}>Plataforma de Gestión</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
          <NavLink to="/app/home" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FaHome />
            <span>Inicio</span>
          </NavLink>
          <NavLink to="/app/doctor" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FaUserDoctor />
            <span>Doctores</span>
          </NavLink>
          <NavLink to="/app/paciente" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FaUserInjured />
            <span>Pacientes</span>
          </NavLink>
        </div>
      </div>

      <div>
        <NavLink to="/login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <TbLogout />
          <span>Cerrar Sesión</span>
        </NavLink>
      </div>
    </div>
  );
};
