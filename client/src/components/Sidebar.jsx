import { NavLink, useNavigate } from 'react-router-dom';
import { Heart, LayoutDashboard, Calendar, Users, Stethoscope, Bot, Video, Search, FileText, ClipboardList, Package, Receipt, Pill, LogOut, Settings, Bell } from 'lucide-react';
import './Sidebar.css';

const menuByRole = {
  patient: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/patient' },
    { icon: Search, label: 'Trouver un médecin', path: '/patient/search' },
    { icon: Calendar, label: 'Mes rendez-vous', path: '/patient/appointments' },
    { icon: FileText, label: 'Dossier médical', path: '/patient/records' },
    { icon: Pill, label: 'Ordonnances', path: '/patient/prescriptions' },
    { icon: Settings, label: 'Mon profil', path: '/patient/profile' },
  ],
  doctor: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/doctor' },
    { icon: Calendar, label: 'Calendrier', path: '/doctor/calendar' },
    { icon: Users, label: 'Patients', path: '/doctor/patients' },
    { icon: Stethoscope, label: 'Consultation', path: '/doctor/consultation' },
    { icon: Bot, label: 'Assistant IA', path: '/doctor/ai-assistant' },
    { icon: Video, label: 'Téléconsultation', path: '/doctor/teleconsultation' },
  ],
  clinic: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/clinic' },
    { icon: ClipboardList, label: "File d'attente", path: '/clinic/queue' },
    { icon: Users, label: 'Praticiens', path: '/clinic/practitioners' },
    { icon: Package, label: 'Stocks', path: '/clinic/inventory' },
    { icon: Receipt, label: 'Facturation', path: '/clinic/billing' },
  ],
  pharmacist: [
    { icon: LayoutDashboard, label: 'Tableau de bord', path: '/pharmacist' },
    { icon: FileText, label: 'Ordonnances', path: '/pharmacist/prescriptions' },
  ]
};

const roleLabels = {
  patient: 'Espace Patient',
  doctor: 'Espace Médecin',
  clinic: 'Espace Clinique',
  pharmacist: 'Espace Pharmacien'
};

const roleUsers = {
  patient: { name: 'Mohamed Bouzid', subtitle: 'Patient' },
  doctor: { name: 'Dr. Amira Benali', subtitle: 'Cardiologue' },
  clinic: { name: 'Clinique El Nour', subtitle: 'Constantine' },
  pharmacist: { name: 'Pharmacie Centrale', subtitle: 'Alger' }
};

export default function Sidebar({ role }) {
  const navigate = useNavigate();
  const menu = menuByRole[role] || [];
  const user = roleUsers[role];

  return (
    <aside className="sidebar dark-scroll">
      <div className="sidebar-header">
        <div className="sidebar-logo" onClick={() => navigate('/')}>
          <div className="logo-icon"><Heart size={18} /></div>
          <span className="logo-text">Tabib<span className="logo-accent">Connect</span></span>
        </div>
        <span className="sidebar-role-badge">{roleLabels[role]}</span>
      </div>

      <div className="sidebar-user">
        <div className="sidebar-avatar">
          {user?.name?.charAt(0)}
        </div>
        <div className="sidebar-user-info">
          <span className="sidebar-user-name">{user?.name}</span>
          <span className="sidebar-user-role">{user?.subtitle}</span>
        </div>
        <button className="sidebar-notif">
          <Bell size={16} />
          <span className="notif-dot"></span>
        </button>
      </div>

      <nav className="sidebar-nav">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === `/${role}`}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-link" onClick={() => navigate('/login')}>
          <LogOut size={18} />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
